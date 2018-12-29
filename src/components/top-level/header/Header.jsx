import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToggleBox from '../../reusable/togglebox/ToggleBox';
import { StyledHeader, StyledTitleHolder } from './styles';

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledTitleHolder>
          HEADER
        </StyledTitleHolder>
        <ToggleBox
          onChange={this.props.onThemeChange}
          name="changeTheme"
          value={this.props.isDarkTheme}
        />
      </StyledHeader>
    );
  }
}

Header.propTypes = {
  onThemeChange: PropTypes.func,
  isDarkTheme: PropTypes.bool
};

export default Header;
