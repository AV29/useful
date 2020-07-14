import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, bool, number } from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popper from '@material-ui/core/Popper';
import Collapse from '@material-ui/core/Collapse';
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
  isAccordion: bool,
  isRoot: bool,
  iconSize: number
};

// ------------------------------------------------------ SubMenu ------------------------------------------------------

const SubMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const isOpened = Boolean(anchorEl);

  return (
    <>
      <StyledMenuItem
        onClick={event => setAnchorEl(anchorEl ? null : event.currentTarget)}
        disabled={props.item.disabled}
      >
        {getNodeContent(props)}
        <StyledOpenIndicator isOpened={isOpened} />
      </StyledMenuItem>
      { props.isAccordion ? (
        <Collapse in={isOpened} timeout="auto" unmountOnExit className={styles.accordionWrapper}>
          <NavMenu
            isRoot={false}
            isMinimized={false}
            items={props.item.items}
            isVertical={props.isVertical}
            isAccordion={props.isAccordion}
          />
        </Collapse>
      ) : (
        <Popper
          transition
          disablePortal
          role={undefined}
          keepMounted={false}
          anchorEl={anchorEl}
          open={isOpened}
          placement={props.isRoot && !props.isVertical ? 'bottom-start' : 'right-start'}
        >
          <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
            <StyledMenuList isBottom={props.isRoot && !props.isVertical}>
              <NavMenu
                isRoot={false}
                isMinimized={false}
                items={props.item.items}
                isVertical={props.isVertical}
              />
            </StyledMenuList>
          </ClickAwayListener>
        </Popper>
      )}
    </>
  )
};

SubMenu.propTypes = {
  item: ItemType,
  isVertical: bool,
  isMinimized: bool,
  isRoot: bool,
  isAccordion: bool,
  iconSize: number
};

// ------------------------------------------------------ NavMenu ------------------------------------------------------

const NavMenu = props => (
  <div className={[
    props.isRoot ? styles.navMenuWrapper : '',
    props.isRoot && !props.isVertical ? styles.isHorizontal : '',
    props.isRoot && props.isMinimized ? styles.isMinimized : '',
    props.isRoot && props.isAccordion ? styles.isAccordion : ''
  ].join(' ')}
  >
    {props.items.map(item => item.items && item.items.length > 0 ? (
       <SubMenu
         key={item.id}
         item={item}
         isVertical={props.isVertical}
         isRoot={props.isRoot}
         isAccordion={props.isAccordion}
         isMinimized={props.isMinimized}
         iconSize={props.iconSize}
       />
      ) : (
       <MenuItem
         key={item.id}
         item={item}
         isMinimized={props.isMinimized}
         isRoot={props.isRoot}
         isAccordion={props.isAccordion}
         iconSize={props.iconSize}
       />
      ))
    }
  </div>
);

NavMenu.propTypes = {
  items: arrayOf(ItemType),
  isRoot: bool,
  isMinimized: bool,
  isAccordion: bool,
  isVertical: bool,
  iconSize: number
};

NavMenu.defaultProps = {
  isRoot: true,
  isVertical: true,
  iconSize: 10
};

export default NavMenu;
