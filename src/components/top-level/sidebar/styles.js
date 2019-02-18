import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSideBar = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  overflow: auto;
  box-shadow: 0 5px 10px ${({ theme: { shadowColor } }) => shadowColor};
`;

export const StyledName = styled.h2`
  margin: 15px 0;
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
    box-shadow: 6px 6px 5px inset ${({ theme: { shadowColor } }) => shadowColor};
  }
`;

export const StyledNavItemWrapper = styled.div`
    border-bottom: 1px solid ${({ theme: { borderColor } }) => borderColor};
`;
