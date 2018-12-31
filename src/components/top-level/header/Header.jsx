import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThemePicker from '../../reusable/theme-picker/ThemePicker';
import { StyledHeader, StyledTitleHolder } from './styles';

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledTitleHolder>
          Useful Apps
        </StyledTitleHolder>
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
    color: PropTypes.string,
    bgColor: PropTypes.string,
    shadowColor: PropTypes.string,
    borderColor: PropTypes.string
  }))
};

export default Header;
