import React, { Component } from 'react';
import { mainTheme } from '../../utilities/themes';
import styled from 'styled-components';

const StyledHeader = styled.div`
  font-size: 20px;
  color: ${({ theme: { color } }) => color};
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader theme={mainTheme}>
        HEADER
      </StyledHeader>
    );
  }
}

export default Header;
