import React from 'react';
import { StyledIcon, StyledTitle } from './styles';
import styles from './NavMenu.less';

const getTitle = item => (
  <StyledTitle>
    {typeof item.title === 'function' ? item.title() : item.title}
  </StyledTitle>
);

const getItemContent = props => {
  if(props.isMinimized) {
    return !props.isRoot ? getTitle(props.item) : '';
  } else {
    return getTitle(props.item);
  }
};

export const getNodeContent = props => (
  <div className={styles.flexCentered}>
    {(props.item.icon || props.isAccordion) && <StyledIcon size={props.iconSize}>{props.item.icon}</StyledIcon>}
    {getItemContent(props)}
  </div>
);
