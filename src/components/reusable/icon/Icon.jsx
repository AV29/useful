import React, { Component } from 'react';
import { func, string, object, bool } from 'prop-types';
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
    const { icon = 'logo', size = 30, ...props } = this.props;
    const IconComponent = Icons[icon];
    return (
      <StyledIcon
        size={size}
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
  disabled: bool
};

Icon.defaultProps = {
  onClick: () => undefined
};

export function FontIcon({ icon = 'logo', type = 'fa', className, onClick, disabled, ...props }) {

  const handleClick = (event) => {
    onClick && !disabled && onClick(event);
  };

  return (
    <i
      onClick={handleClick}
      {...props}
      className={`${type} fa-${icon}`}
    />
  );
}
