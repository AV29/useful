import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as variables from '../../styles/variables';

export const StyledSideBar = styled.div`
  flex-direction: column;
  display: flex;
  box-shadow: 0 5px 10px ${variables.shadowColor};
  background-color: ${variables.sidebarBGColor};
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 15px;
  color: darkgreen;
  transition: all .3s cubic-bezier(0.15, 0.9, 0.5, 1);
  text-align: center;
  border-bottom: 1px solid #eeeeee;
  &.active {
    box-shadow: 3px 3px 5px inset lightgrey;
  }
  &:hover {
    box-shadow: 6px 6px 5px inset lightgrey;
  }
`;
