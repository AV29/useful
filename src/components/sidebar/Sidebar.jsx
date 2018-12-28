import React from 'react';
import routesConfig from '../../routing/routesConfig';
import { StyledSideBar, NavItem } from './styles';

const navigationItems = Object.values(routesConfig).filter(route => route.id !== routesConfig.root.id);

function Sidebar(props) {
  return (
    <StyledSideBar>
      {
        navigationItems.map(({ id, path, name }) => (
          <NavItem
            key={id}
            to={path}
          >
            {name}
          </NavItem>
        ))
      }
    </StyledSideBar>
  );
}

export default Sidebar;
