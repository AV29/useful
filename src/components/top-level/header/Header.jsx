import React, { Component } from 'react';
import { func, arrayOf, shape, string } from 'prop-types';
import { StyledHeader } from './styles';
import ThemePicker from '../../reusable/controls/theme-picker/ThemePicker';

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <h1>
          Approach examples
        </h1>
        <ThemePicker
          themes={this.props.themes}
          onChange={this.props.onThemeChange}
        />
      </StyledHeader>
    );
  }
}

Header.propTypes = {
  onThemeChange: func,
  themes: arrayOf(shape({
    id: string.isRequired,
    baseColor: string,
    backgroundColor: string,
    shadowColor: string,
    borderColor: string
  }))
};

export default Header;
