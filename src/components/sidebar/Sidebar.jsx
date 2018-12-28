import React from 'react';
import routesConfig from '../../routing/routesConfig';
import Icon from '../icon/Icon';
import { StyledSideBar, NavItem, StyledName } from './styles';

const navigationItems = Object.values(routesConfig).filter(route => route.id !== routesConfig.root.id);

function Sidebar(props) {
  return (
    <StyledSideBar>
      {
        navigationItems.map(({ id, path, name, icon }) => (
          <NavItem
            key={id}
            to={path}
          >
            <StyledName>{name}</StyledName>
            <Icon icon={icon}/>
          </NavItem>
        ))
      }
    </StyledSideBar>
  );
}

export default Sidebar;
