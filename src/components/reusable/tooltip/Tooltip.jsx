import React, { Fragment, Component, useRef, useEffect, useState } from 'react';
import { bool, func, string, node, object } from 'prop-types';
import Portal from '../portal/Portal';
import { useComponentMountVisibilityDelay } from '../../pages/hooks/custom-hooks/useHover';
import { StyledTooltip } from './styles';

const getPositionInfo = (el) => {
  return (el && el.getBoundingClientRect && el.getBoundingClientRect()) || { top: 0, left: 0 };
};

const getTopConsideringWindow = (targetTop, tooltipFullHeight) => {
  return window.innerHeight >= targetTop + tooltipFullHeight ? targetTop : window.innerHeight - tooltipFullHeight;
};

const getTooltipPosition = (target, tooltip, offset = 10) => {
  const tooltipFullHeight = tooltip.height + offset;
  const tooltipFullWidth = tooltip.width + offset;

  const fitsRight = window.innerWidth - target.right > tooltipFullWidth;
  const fitsLeft = target.left > tooltipFullWidth;
  const fitsBottom = window.innerHeight - target.bottom > tooltipFullHeight;
  const fitsTop = target.top > tooltipFullHeight;

  if (fitsTop && fitsLeft && fitsRight) {
    return {
      top: target.top - tooltipFullHeight,
      left: (target.width / 2 + target.left) - tooltip.width / 2,
      position: 'top'
    };
  }

  if (fitsRight) {
    return {
      top: getTopConsideringWindow(target.top, tooltipFullHeight),
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
    top: getTopConsideringWindow(target.top, tooltipFullHeight),
    left: target.left - tooltipFullWidth,
    position: 'left'
  };
};

class Tooltip extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isShown: false
    };

    this.handleHideTooltip = this.handleHideTooltip.bind(this);
    this.handleShowTooltip = this.handleShowTooltip.bind(this);
    this.bindTooltip = this.bindTooltip.bind(this);
    this.bindHoverTarget = this.bindHoverTarget.bind(this);

    this.root = this.getRoot();
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

  getRoot () {
    return this.props.rootContainer ? document.getElementById(this.props.rootContainer) : null;
  }

  handleShowTooltip () {
    if (this.props.suppress) return;
    this.setState({
      isShown: true
    }, () => {
      this.setState({
        fading: true,
        ...getTooltipPosition(getPositionInfo(this.hoverTarget), getPositionInfo(this.tooltip))
      });
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
              withoutTip={this.props.withoutTip}
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

Tooltip.defaultProps = {
  withoutTip: false,
  suppress: false
};

Tooltip.propTypes = {
  children: node.isRequired,
  renderHoverTarget: func.isRequired,
  rootContainer: string,
  withoutTip: bool,
  suppress: bool
};

export function HooksTooltip ({ children, targetRef }) {
  const [style, setStyle] = useState({});
  const isVisible = useComponentMountVisibilityDelay(500);
  const tooltipRef = useRef(null);
  useEffect(() => {
    setStyle(getTooltipPosition(getPositionInfo(targetRef.current), getPositionInfo(tooltipRef.current)));
  }, [targetRef]);

  return (
    <Fragment>
      {
        <Portal>
          <StyledTooltip
            ref={tooltipRef}
            style={{ ...style }}
            fading={isVisible}
            position="right"
          >
            {children}
          </StyledTooltip>
        </Portal>
      }
    </Fragment>
  );
}

HooksTooltip.propTypes = {
  children: node.isRequired,
  baseCoords: object,
  targetRef: object
};

export default Tooltip;
