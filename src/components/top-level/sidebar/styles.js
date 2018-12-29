import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as vars from '../../../styles/variables';

export const StyledSideBar = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 5px 10px ${vars.shadowColor};
  svg {
    width: 30px;
    height: 30px;
    fill: ${({ theme: { color } }) => color}
  }
`;

export const StyledName = styled.h2`
  margin: 15px 0;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 15px;
  color: ${({ theme: { color } }) => color};
  text-align: center;
  border-bottom: 1px solid lightgrey;
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
    box-shadow: 6px 6px 5px inset ${vars.shadowColor};
  }
`;

export const StyledCollapseToggler = styled.span`
  transform: ${({ collapsed }) => collapsed ? 'rotate(180deg)' : 'none'};
  transition: transform .1s ${vars.transitionStyle};
  opacity: 0.7;
  cursor: pointer;
  align-self: center;
  padding: 10px;
  &:hover {
    opacity: 1;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;
