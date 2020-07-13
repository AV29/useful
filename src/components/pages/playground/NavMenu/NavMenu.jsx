import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, bool, shape, string } from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import { StyledMenuItem, StyledMenuList, StyledOpenIndicator, StyledPaper } from './styles';
import styles from './NavMenu.less';

export const getTitle = item => typeof item.title === 'function' ? item.title() : item.title;

export const ItemType = shape({
  id: string.isRequired,
  path: string,
  disabled: bool
});

const SubMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => setAnchorEl(null);

  const handleToggle = event => setAnchorEl(anchorEl ? null : event.currentTarget);

  const nodeContent = getTitle(props.item);

  console.log(props.isVertical, props.isRoot);

  return (
    <div key={props.item.id} className={styles.menuWrapper}>
      <StyledMenuItem onClick={handleToggle} disabled={props.item.disabled}>
        <div className={styles.flexCentered}>
          {props.item.icon && <span className={styles.icon}>{props.item.icon}</span>}
          {nodeContent && <span className={styles.title}>{nodeContent}</span>}
        </div>
        <StyledOpenIndicator isCollapsed={!anchorEl} />
      </StyledMenuItem>

      <Popper
        elevation={10}
        keepMounted={false}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        role={undefined}
        transition
        disablePortal
        placement={props.isRoot && !props.isVertical ? 'bottom-start' : 'right-start'}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <StyledPaper isPlacedBottom={props.isRoot && !props.isVertical}>
              <ClickAwayListener onClickAway={handleClose}>
                <StyledMenuList>
                  <NavMenu items={props.item.items} isRoot={false} isVertical={props.isVertical} />
                </StyledMenuList>
              </ClickAwayListener>
            </StyledPaper>
          </Grow>
        )}
      </Popper>
    </div>
  )
};

SubMenu.propTypes = {
  item: ItemType,
  isVertical: bool,
  isRoot: bool
};

const MenuItem = props => (
  <StyledMenuItem
    key={props.item.id}
    component={Link}
    to={props.item.path || '/'}
    disabled={props.item.disabled}
  >
    <span className={styles.title}>{getTitle(props.item)}</span>
  </StyledMenuItem>
);

MenuItem.propTypes = {
  item: ItemType
};

const NavMenu = props => (
  <div className={[
        props.isRoot && !props.isVertical ? styles.isHorizontal : '',
        props.isRoot ? styles.navMenuWrapper : ''
      ].join(' ')}>
    {props.items.map(item => item.items && item.items.length > 0 ?
       <SubMenu key={item.id} item={item} isVertical={props.isVertical} isRoot={props.isRoot} /> :
       <MenuItem key={item.id} item={item} />
    )}
  </div>
);

NavMenu.propTypes = {
  items: arrayOf(ItemType),
  isRoot: bool,
  isVertical: bool
};

NavMenu.defaultProps = {
  isRoot: true,
  isVertical: true
};

export default NavMenu;
