import React, { Fragment, Component } from 'react';
import { bool, func, string, object } from 'prop-types';
import Portal from '../portal/Portal';
import { StyledTooltip } from './styles';

class Tooltip extends Component {
  static getPositionInfo(el) {
    return (el && el.getBoundingClientRect && el.getBoundingClientRect()) || { top: 0, left: 0 };
  }

  static getTooltipOrientation(targetPositionInfo, tooltipPositionInfo) {
    const { top, left, right, width, height } = targetPositionInfo;
    const topEnd = top - height / 2 - tooltipPositionInfo.height;
    const isOnTheLeft = left < tooltipPositionInfo.width;
    const isOnTheRight = window.innerWidth - right < tooltipPositionInfo.width / 2;
    const isOnTop = topEnd > tooltipPositionInfo.height;
    if (isOnTheLeft) {
      return {
        left: right,
        top: top + 5,
        position: 'right'
      };
    } else if (isOnTheRight) {
      return {
        top: top - 5,
        left: left - tooltipPositionInfo.width - 5,
        position: 'left'
      };
    } else if (isOnTop) {
      return {
        top: topEnd,
        left: left - tooltipPositionInfo.width / 2 + width / 2,
        position: 'top'
      };
    } else {
      return {
        top: top + height / 2 + tooltipPositionInfo.height,
        left: left - tooltipPositionInfo.width / 2 + width / 2,
        position: 'bottom'
      };
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
      position: 'top',
      top: 0,
      left: 0
    };

    this.handleHideTooltip = this.handleHideTooltip.bind(this);
    this.handleShowTooltip = this.handleShowTooltip.bind(this);
    this.bindTooltip = this.bindTooltip.bind(this);
    this.bindHoverTarget = this.bindHoverTarget.bind(this);

    this.root = this.getContextMenuRoot();
  }

  bindTooltip(tooltip) {
    this.tooltip = tooltip;
  }

  bindHoverTarget(hoverTarget) {
    this.hoverTarget = hoverTarget;
  }

  getContextMenuRoot() {
    return this.props.rootContainer ? document.getElementById(this.props.rootContainer) : null;
  }

  handleShowTooltip() {
    const targetPositionInfo = Tooltip.getPositionInfo(this.hoverTarget);
    const tooltipPositionInfo = Tooltip.getPositionInfo(this.tooltip);
    this.setState({
      isShown: true,
      ...Tooltip.getTooltipOrientation(targetPositionInfo, tooltipPositionInfo)
    });
  }

  handleHideTooltip() {
    this.setState({ isShown: false });
  }

  render() {
    const { isShown, top, left, position } = this.state;
    return (
      <Fragment>
        <div
          onMouseEnter={this.handleShowTooltip}
          onMouseLeave={this.handleHideTooltip}
        >
          {this.props.renderHoverTarget({ bindRef: this.bindHoverTarget })}
        </div>
        {
          <Portal node={this.root}>
            <StyledTooltip
              style={{ top, left }}
              isShown={isShown}
              position={position}
            >
              {this.props.children({ bindRef: this.bindTooltip })}
            </StyledTooltip>
          </Portal>
        }
      </Fragment>
    );
  }
}

Tooltip.propTypes = {
  children: func.isRequired,
  renderHoverTarget: func.isRequired,
  targetClassName: string,
  className: string,
  rootContainer: string,
  style: object,
  left: bool,
  right: bool,
  bottom: bool,
  top: bool
};

export default Tooltip;
