import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as vars from '../../styles/variables';

export const StyledSideBar = styled.div`
  flex-direction: column;
  display: flex;
  box-shadow: 0 5px 10px ${vars.shadowColor};
  background-color: ${vars.sidebarBGColor};
`;

export const StyledName = styled.h2`
  margin-bottom: 15px;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 15px;
  color: ${({ theme: { color } }) => color};
  transition: all .2s ${vars.transition};
  text-align: center;
  border-bottom: 1px solid lightgrey;
  max-width: 130px;
  &.active {
    box-shadow: 3px 3px 5px inset ${vars.shadowColor};
  }
  
  &:not(.active) {
    opacity: 0.4;
  }
  &:hover:not(.active) {
    opacity: 0.7;
  }
  &:active {
    box-shadow: 6px 6px 5px inset ${vars.shadowColor};
  }
  svg {
    width: 30px;
    height: 30px;
    fill: ${({ theme: { color } }) => color}
  }
`;
