import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { getShadowColor, getBorderColor } from '../../../styles/styles';

export const StyledSideBar = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  overflow: auto;
  height: 100%;
  box-shadow: 0 5px 10px ${getShadowColor};
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 15px;
  text-align: center;
  display: block;
  &.active {
    opacity: 1;
  }
  &:not(.active) {
    opacity: 0.4;
  }
  &:hover:not(.active) {
    opacity: 0.7;
  }
  &:active {
    box-shadow: 6px 6px 5px inset ${getShadowColor};
  }
`;

export const StyledNavItemWrapper = styled.div`
    border-bottom: 1px solid ${getBorderColor};
`;
