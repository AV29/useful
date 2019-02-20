import React, { useState } from 'react';
import routesConfig from '../../../routing/routesConfig';
import { Icon } from '../../reusable/icon/Icon';
import { FlexRowCenter, SmallHeading } from '../../../styles/styles';
import { StyledSideBar, NavItem, StyledNavItemWrapper } from './styles';
import MenuOpener from '../../reusable/controls/menu-opener/MenuOpener';
import Tooltip from '../../reusable/tooltip/Tooltip';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <StyledSideBar>
      <div>
        {
          routesConfig.map(({ id, path, name, icon }) => (
            <StyledNavItemWrapper key={id}>
              <NavItem to={path}>
                {!collapsed && <SmallHeading>{name}</SmallHeading>}
                <Tooltip renderHoverTarget={({ bindRef }) => <Icon innerRef={bindRef} icon={icon}/>}>
                  {name}
                </Tooltip>
              </NavItem>
            </StyledNavItemWrapper>
          ))
        }
      </div>
      <FlexRowCenter style={{ minHeight: 45 }}>
        <MenuOpener
          collapsed={collapsed}
          onClick={() => setCollapsed(!collapsed)}
        />
      </FlexRowCenter>
    </StyledSideBar>
  );
}

export default Sidebar;
