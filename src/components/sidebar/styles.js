import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as variables from '../../styles/variables';

export const StyledSideBar = styled.div`
  flex-direction: column;
  display: flex;
  background-color: ${variables.sidebarBGColor};
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 15px;
  background-color: tomato;
  color: white;
  transition: all .3s cubic-bezier(0.15, 0.9, 0.5, 1);
  &:hover {
    background-color: orangered;
  }
  &.active {
    background-color: lightgreen;

   &:hover {
     background-color: greenyellow;
   }
  }
`;
