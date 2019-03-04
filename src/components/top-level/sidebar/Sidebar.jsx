import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import routesConfig from '../../../routing/routesConfig';
import { Icon } from '../../reusable/icon/Icon';
import { FlexRow, SmallHeading } from '../../../styles/styles';
import { StyledSideBar, NavItem, StyledNavItemWrapper } from './styles';
import MenuOpener from '../../reusable/controls/menu-opener/MenuOpener';
import Tooltip from '../../reusable/tooltip/Tooltip';

function Sidebar () {
  const [collapsed, setCollapsed] = useState(true);
  const { t } = useTranslation('common');
  return (
    <StyledSideBar>
      <div>
        {
          routesConfig.map(({ id, path, nameKey, icon }) => (
            <StyledNavItemWrapper key={id}>
              <NavItem to={path}>
                {!collapsed && <SmallHeading>{t(nameKey)}</SmallHeading>}
                <Tooltip
                  suppress={!collapsed}
                  renderHoverTarget={({ bindRef }) => <Icon innerRef={bindRef} icon={icon}/>}
                >
                  {t(nameKey)}
                </Tooltip>
              </NavItem>
            </StyledNavItemWrapper>
          ))
        }
      </div>
      <FlexRow style={{ minHeight: 45 }}>
        <MenuOpener
          collapsed={collapsed}
          onClick={() => setCollapsed(!collapsed)}
        />
      </FlexRow>
    </StyledSideBar>
  );
}

export default Sidebar;
