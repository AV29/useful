import React from 'react';
import styles from './NavMenu.less';

export const getTitle = item => (
  <span className={styles.title}>
    {typeof item.title === 'function' ? item.title() : item.title}
  </span>
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
    {props.item.icon && <span className={styles.icon}>{props.item.icon}</span>}
    {getItemContent(props)}
  </div>
);
