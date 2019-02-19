import React, { Fragment, Component } from 'react';
import { bool, node, string, object } from 'prop-types';
import Portal from '../portal/Portal';
import classNames from 'classnames';

class Tooltip extends Component {
  static getPositionInfo (el) {
    return (el && el.getBoundingClientRect && el.getBoundingClientRect()) || { top: 0, left: 0 };
  }

  static getTooltipOrientation (targetPositionInfo, tooltipPositionInfo) {
    const { top, left, right, width, height } = targetPositionInfo;
    const topEnd = top - height / 2 - tooltipPositionInfo.height;
    const isOnTheLeft = left < tooltipPositionInfo.width;
    const isOnTheRight = window.innerWidth - right < tooltipPositionInfo.width / 2;
    const isOnTop = topEnd > tooltipPositionInfo.height;
    if (isOnTheLeft) {
      return {
        left: right,
        top: top + 5,
        orientation: 'right'
      };
    } else if (isOnTheRight) {
      return {
        top: top - 5,
        left: left - tooltipPositionInfo.width - 5,
        orientation: 'left'
      };
    } else if (isOnTop) {
      return {
        top: topEnd,
        left: left - tooltipPositionInfo.width / 2 + width / 2,
        orientation: 'top'
      };
    } else {
      return {
        top: top + height / 2 + tooltipPositionInfo.height,
        left: left - tooltipPositionInfo.width / 2 + width / 2,
        orientation: 'bottom'
      };
    }
  }

  constructor (props) {
    super(props);

    this.targetElement = null;
    this.tooltip = null;

    this.state = {
      isShown: false,
      fadeIn: false,
      orientation: 'top',
      top: 0,
      left: 0
    };

    this.handleHideTooltip = this.handleHideTooltip.bind(this);
    this.handleShowTooltip = this.handleShowTooltip.bind(this);
    this.setTooltipStyles = this.setTooltipStyles.bind(this);
  }

  componentDidUpdate (_, prevState) {
    if (this.state.isShown !== prevState.isShown && this.state.isShown) {
      this.setTooltipStyles();
    }
  }

  setTooltipStyles () {
    const targetPositionInfo = Tooltip.getPositionInfo(this.targetElement);
    const tooltipPositionInfo = Tooltip.getPositionInfo(this.tooltip);
    this.setState({
      fadeIn: true,
      ...Tooltip.getTooltipOrientation(targetPositionInfo, tooltipPositionInfo)
    });
  }

  handleShowTooltip () {
    this.setState({ isShown: true });
  }

  handleHideTooltip () {
    this.setState({ isShown: false, fadeIn: false });
  }

  render () {
    const contextMenuRoot = document.getElementById('llamasoft-maps-application-shell');
    const { children, className, target, targetClassName, style } = this.props;
    const { isShown, top, left, fadeIn, orientation } = this.state;
    return (
      <Fragment>
        <div
          ref={target => this.targetElement = target}
          className={targetClassName}
          style={style}
          onMouseEnter={this.handleShowTooltip}
          onMouseLeave={this.handleHideTooltip}
        >
          {target}
        </div>
        {
          isShown &&
          <Portal node={contextMenuRoot}>
            <div
              ref={tooltip => this.tooltip = tooltip}
              style={{ top, left }}
              className={classNames(
                'llamasoft-tooltip',
                orientation,
                { [className]: className },
                { 'fade-in': fadeIn }
              )}
            >
              {children}
            </div>
          </Portal>
        }
      </Fragment>
    );
  }
}

Tooltip.propTypes = {
  children: node.isRequired,
  target: node.isRequired,
  targetClassName: string,
  className: string,
  style: object,
  left: bool,
  right: bool,
  bottom: bool,
  top: bool
};

export default Tooltip;
