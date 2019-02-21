import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThemePicker from '../../reusable/controls/theme-picker/ThemePicker';
import { StyledHeader } from './styles';

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
  onThemeChange: PropTypes.func,
  themes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    baseColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    shadowColor: PropTypes.string,
    borderColor: PropTypes.string
  }))
};

export default Header;
