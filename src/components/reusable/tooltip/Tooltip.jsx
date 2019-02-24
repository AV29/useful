import React, { Fragment, Component } from 'react';
import { bool, func, string, node, object } from 'prop-types';
import Portal from '../portal/Portal';
import { useTooltipPosition } from '../../../hooks/useTooltipPosition';
import { StyledTooltip } from './styles';
import getTooltipPosition, { getPositionInfo } from '../../../utilities/getTooltipPosition';

class ClassTooltip extends Component {
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
    const { isShown, top, left, orientation, fading } = this.state;
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
              orientation={orientation}
            >
              {this.props.children}
            </StyledTooltip>
          </Portal>
        }
      </Fragment>
    );
  }
}

ClassTooltip.defaultProps = {
  withoutTip: false,
  suppress: false
};

ClassTooltip.propTypes = {
  children: node.isRequired,
  renderHoverTarget: func.isRequired,
  rootContainer: string,
  withoutTip: bool,
  suppress: bool
};

export function Tooltip ({ children, targetRef }) {
  const [ref, position, isVisible] = useTooltipPosition(targetRef);
  const { orientation, ...style } = position;
  return (
    <Fragment>
      {
        <Portal>
          <StyledTooltip
            ref={ref}
            style={{ ...style }}
            fading={isVisible}
            orientation={orientation}
          >
            {children}
          </StyledTooltip>
        </Portal>
      }
    </Fragment>
  );
}

Tooltip.propTypes = {
  children: node.isRequired,
  targetRef: object
};

export default ClassTooltip;
