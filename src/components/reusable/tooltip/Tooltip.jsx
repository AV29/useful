import React, { Fragment, Component } from 'react';
import { bool, func, string, object, node } from 'prop-types';
import Portal from '../portal/Portal';
import { StyledTooltip } from './styles';

class Tooltip extends Component {
  static getPositionInfo (el) {
    return (el && el.getBoundingClientRect && el.getBoundingClientRect()) || { top: 0, left: 0 };
  }

  static getTooltipPosition (hoverTarget, tooltip, offset = 5) {
    const target = Tooltip.getPositionInfo(hoverTarget);
    const tooltipInfo = Tooltip.getPositionInfo(tooltip);

    const tooltipFullHeight = tooltipInfo.height + offset;
    const tooltipFullWidth = tooltipInfo.width + offset;

    const fitsRight = window.innerWidth - target.right > tooltipFullWidth;
    const fitsLeft = target.left > tooltipFullWidth;
    const fitsBottom = window.innerHeight - target.bottom > tooltipFullHeight;
    const fitsTop = target.top > tooltipFullHeight;

    const relativeTop = window.innerHeight >= target.top + tooltipFullHeight ? target.top : window.innerHeight - tooltipFullHeight;

    if (fitsTop && fitsLeft && fitsRight) {
      return {
        top: target.top - tooltipFullHeight,
        left: (target.width / 2 + target.left) - tooltipInfo.width / 2,
        position: 'top'
      };
    }

    if (fitsRight) {
      return {
        top: relativeTop,
        left: target.right + offset,
        position: 'right'
      };
    }

    if (fitsBottom && fitsRight) {
      return {
        left: target.left + offset,
        top: target.bottom + offset,
        position: 'bottom'
      };
    }

    return {
      top: relativeTop,
      left: target.left - tooltipFullWidth,
      position: 'left'
    };
  }

  constructor (props) {
    super(props);

    this.state = {
      isShown: false
    };

    this.handleHideTooltip = this.handleHideTooltip.bind(this);
    this.handleShowTooltip = this.handleShowTooltip.bind(this);
    this.bindTooltip = this.bindTooltip.bind(this);
    this.bindHoverTarget = this.bindHoverTarget.bind(this);

    this.root = this.getContextMenuRoot();
  }

  componentDidMount () {
    this.hoverTarget.addEventListener('mouseenter', this.handleShowTooltip);
    this.hoverTarget.addEventListener('mouseleave', this.handleHideTooltip);
  }

  componentWillUnmount () {
    this.hoverTarget.removeEventListener('mouseenter', this.handleShowTooltip);
    this.hoverTarget.removeEventListener('mouseleave', this.handleHideTooltip);
  }

  bindTooltip (tooltip) {
    this.tooltip = tooltip;
  }

  bindHoverTarget (hoverTarget) {
    this.hoverTarget = hoverTarget;
  }

  getContextMenuRoot () {
    return this.props.rootContainer ? document.getElementById(this.props.rootContainer) : null;
  }

  handleShowTooltip () {
    this.setState({
      isShown: true
    }, () => {
      this.setState({ fading: true, ...Tooltip.getTooltipPosition(this.hoverTarget, this.tooltip, 10) });
    });
  }

  handleHideTooltip () {
    this.setState({ isShown: false, fading: false });
  }

  render () {
    const { isShown, top, left, position, fading } = this.state;
    return (
      <Fragment>
        {this.props.renderHoverTarget({ bindRef: this.bindHoverTarget })}
        {
          isShown &&
          <Portal node={this.root}>
            <StyledTooltip
              ref={tooltip => this.tooltip = tooltip}
              fading={fading}
              style={{ top, left }}
              position={position}
            >
              {this.props.children}
            </StyledTooltip>
          </Portal>
        }
      </Fragment>
    );
  }
}

Tooltip.propTypes = {
  children: node.isRequired,
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
