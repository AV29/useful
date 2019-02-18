import React, { Component } from 'react';
import routesConfig from '../../../routing/routesConfig';
import { Icon } from '../../reusable/icon/Icon';
import MenuOpener from '../../reusable/controls/menu-opener/MenuOpener';
import { FlexRowCenter } from '../../../styles/styles';
import { StyledSideBar, NavItem, StyledName, StyledNavItemWrapper } from './styles';

const navigationItems = Object.values(routesConfig).filter(route => route.id !== routesConfig.root.id);

class Sidebar extends Component {

  constructor (props) {
    super(props);

    this.handleToggleSidebarView = this.handleToggleSidebarView.bind(this);

    this.state = {
      collapsed: true
    };
  }

  handleToggleSidebarView () {
    this.setState(({ collapsed }) => ({ collapsed: !collapsed }));
  }

  render () {
    const { collapsed } = this.state;
    return (
      <StyledSideBar>
        <div>
          {
            navigationItems.map(({ id, path, name, icon }) => (
              <StyledNavItemWrapper key={id}>
                <NavItem to={path}>
                  {!collapsed && <StyledName>{name}</StyledName>}
                  <Icon icon={icon}/>
                </NavItem>
              </StyledNavItemWrapper>
            ))
          }
        </div>
        <FlexRowCenter style={{ minHeight: 40 }}>
          <MenuOpener
            collapsed={collapsed}
            onClick={this.handleToggleSidebarView}
          />
        </FlexRowCenter>
      </StyledSideBar>
    );
  }
}

export default Sidebar;
