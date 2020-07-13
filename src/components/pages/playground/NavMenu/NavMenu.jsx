import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, bool } from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popper from '@material-ui/core/Popper';
import { StyledMenuItem, StyledMenuList, StyledOpenIndicator } from './styles';
import { getNodeContent } from './utils';
import { ItemType } from './types';
import styles from './NavMenu.less';

// ------------------------------------------------------ MenuItem ------------------------------------------------------

const MenuItem = props => (
  <StyledMenuItem
    key={props.item.id}
    component={Link}
    to={props.item.path || '/'}
    disabled={props.item.disabled}
  >
    {getNodeContent(props)}
  </StyledMenuItem>
);

MenuItem.propTypes = {
  item: ItemType,
  isMinimized: bool,
  isRoot: bool
};

// ------------------------------------------------------ SubMenu ------------------------------------------------------

const SubMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => setAnchorEl(null);

  const handleToggle = event => setAnchorEl(anchorEl ? null : event.currentTarget);

  return (
    <>
      <StyledMenuItem onClick={handleToggle} disabled={props.item.disabled}>
        {getNodeContent(props)}
        <StyledOpenIndicator isCollapsed={!anchorEl} />
      </StyledMenuItem>
      <Popper
        transition
        disablePortal
        role={undefined}
        keepMounted={false}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        placement={props.isRoot && !props.isVertical ? 'bottom-start' : 'right-start'}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <StyledMenuList isPlacedBottom={props.isRoot && !props.isVertical}>
            <NavMenu
              isRoot={false}
              isMinimized={false}
              items={props.item.items}
              isVertical={props.isVertical}
            />
          </StyledMenuList>
        </ClickAwayListener>
      </Popper>
    </>
  )
};

SubMenu.propTypes = {
  item: ItemType,
  isVertical: bool,
  isMinimized: bool,
  isRoot: bool
};

// ------------------------------------------------------ NavMenu ------------------------------------------------------

const NavMenu = props => (
  <div className={[
    props.isRoot ? styles.navMenuWrapper : '',
    props.isRoot && !props.isVertical ? styles.isHorizontal : '',
    props.isRoot && props.isMinimized ? styles.isMinimized : ''
  ].join(' ')}
  >
    {props.items.map(item => item.items && item.items.length > 0 ? (
       <SubMenu
         key={item.id}
         item={item}
         isVertical={props.isVertical}
         isRoot={props.isRoot}
         isMinimized={props.isMinimized}
       />
      ) : (
       <MenuItem
         key={item.id}
         item={item}
         isMinimized={props.isMinimized}
         isRoot={props.isRoot}
       />
      ))
    }
  </div>
);

NavMenu.propTypes = {
  items: arrayOf(ItemType),
  isRoot: bool,
  isMinimized: bool,
  isVertical: bool
};

NavMenu.defaultProps = {
  isRoot: true,
  isVertical: true
};

export default NavMenu;
