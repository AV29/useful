import React, { Component } from 'react';
import routesConfig from '../../../routing/routesConfig';
import Icon from '../../reusable/icon/Icon';
import Toggler from '../../reusable/toggler/Toggler';
import { StyledSideBar, NavItem, StyledName } from './styles';

const navigationItems = Object.values(routesConfig).filter(route => route.id !== routesConfig.root.id);

class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.handleToggleSidebarView = this.handleToggleSidebarView.bind(this);

    this.state = {
      collapsed: true
    };
  }

  handleToggleSidebarView() {
    this.setState(({ collapsed }) => ({ collapsed: !collapsed }));
  }

  render() {
    const { collapsed } = this.state;
    return (
      <StyledSideBar>
        <div>
          {
            navigationItems.map(({ id, path, name, icon }) => (
              <NavItem
                key={id}
                to={path}
              >
                {!collapsed && <StyledName>{name}</StyledName>}
                <Icon icon={icon}/>
              </NavItem>
            ))
          }
        </div>
        <Toggler
          collapsed={collapsed}
          onClick={this.handleToggleSidebarView}
        />
      </StyledSideBar>
    );
  }
}

export default Sidebar;
