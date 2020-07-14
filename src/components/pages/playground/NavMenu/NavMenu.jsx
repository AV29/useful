import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, bool } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ClickAwayListener, Popper, Collapse } from '@material-ui/core';
import { StyledMenuItem, StyledMenuList, StyledOpenIndicator, StyledMenuWrapper } from './styles';
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
  isRoot: bool
};

// ------------------------------------------------------ SubMenu ------------------------------------------------------

const SubMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const isOpened = Boolean(anchorEl);

  const isBottom = props.isRoot && !props.isVertical;

  return (
    <>
      <StyledMenuItem
        isOpened={isOpened}
        isBottom={isBottom}
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
          placement={isBottom ? 'bottom-start' : 'right-start'}
        >
          <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
            <StyledMenuList isBottom={isBottom}>
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
  isAccordion: bool
};

// ------------------------------------------------------ NavMenu ------------------------------------------------------

const NavMenu = props => (
  <StyledMenuWrapper {...props}>
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
  </StyledMenuWrapper>
);

NavMenu.propTypes = {
  items: arrayOf(ItemType),
  isRoot: bool,
  isMinimized: bool,
  isAccordion: bool,
  isVertical: bool
};

NavMenu.defaultProps = {
  isRoot: true,
  isVertical: true
};

export default ({ theme, ...props}) => (
  <ThemeProvider theme={theme}>
    <NavMenu {...props} />
  </ThemeProvider>
);
