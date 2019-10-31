import React, { Component } from 'react';
import { func, string, object, bool, number } from 'prop-types';
import Icons from './Icons';
import { StyledIcon } from './styles.js';

export class Icon extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    !this.props.disabled && this.props.onClick(event);
  }

  render() {
    const { icon = 'logo', size = 30, innerRef, ...props } = this.props;
    const IconComponent = Icons[icon];
    return (
      <StyledIcon
        size={size}
        ref={innerRef}
        onClick={this.handleClick}
        {...props}
      >
        {IconComponent ? <IconComponent/> : '*'}
      </StyledIcon>
    );
  }
}

Icon.propTypes = {
  style: object,
  icon: string,
  title: string,
  onClick: func,
  disabled: bool,
  size: number,
  innerRef: func
};

Icon.defaultProps = {
  onClick: () => undefined
};
