import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MUIMenuItem from '@material-ui/core/MenuItem';
import MUIMenu from '@material-ui/core/Menu';
import Icon from '../../reusable/icon/Icon';
import { getBaseColor, getBGColor } from '../../../styles/styles';
import items from './items';
import styles from './Playground.less';

const getMenuStyles = () => ({
  paper: {
    minWidth: 100,
    maxWidth: 200,
    borderRadius: 4,
    marginLeft: 10
  },
  list: {
    padding: 0
  }
});

const useMenuStyles = makeStyles(getMenuStyles);

const StyledMenuList = styled.div`
  color: ${getBaseColor};
  background-color: ${getBGColor};
`;

const StyledMenuItem = styled(MUIMenuItem)`
  && { 
    padding: 10px 15px;
    font-size: 14px;
    justify-content: space-between;
  }
`;

const isThereItems = item => item.items && item.items.length > 0;

const getContent = item => typeof item.component === 'function' ? item.component() : item.component;

const NavMenu = props => props.items.map(item => isThereItems(item) ?
  <SubMenu item={item} key={item.id} onClose={props.onClose} /> :
  <MenuItem item={item} key={item.id} />
);

const SubMenu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => setAnchorEl(!anchorEl ? event.currentTarget : null);

  const handleClose = () => setAnchorEl(null);

  const nodeContent = getContent(props.item);

  return (
    <div key={props.item.id} className={styles.menuWrapper}>
      <StyledMenuItem onClick={handleClick}>
        <div className={styles.flexCentered}>
          {props.item.icon && <span className={styles.icon}>{props.item.icon}</span>}
          {nodeContent && <span className={styles.title}>{nodeContent}</span>}
        </div>
        <Icon size={10} icon='arrowRight' className={!!anchorEl ? styles.isCollapsed: ''}/>
      </StyledMenuItem>
      <MUIMenu
        classes={{ ...useMenuStyles() }}
        id="simple-menu"
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        keepMounted={false}
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={props.onClose || handleClose}
      >
        <StyledMenuList>
          <NavMenu items={props.item.items} onClose={props.onClose || handleClose}/>
        </StyledMenuList>
      </MUIMenu>
    </div>
  )};

const MenuItem = props => (
  <StyledMenuItem
    key={props.item.id}
    component={Link}
    to={props.item.path || '/'}
  >
    <span className={styles.title}>{getContent(props.item)}</span>
  </StyledMenuItem>
);

SubMenu.propTypes = {
  onClose: func
};

NavMenu.propTypes = {
  onClose: func
};

function Playground () {
  return (
    <NavMenu items={items} />
  );
}

export default Playground;
