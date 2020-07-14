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

export const getRGBA = (hexColor = '#ffffff', opacity) => {
  const color = hexColor.charAt(0) === '#' ? hexColor.slice(1) : hexColor;

  let result = '';

  ['red', 'green', 'blue'].forEach((ch, i) => {
    const channel = parseInt(color.slice(2 * i, 2 * (i + 1)), 16);
    result += `${!Number.isNaN(channel) ? channel : 255}, `;
  });

  return `rgba(${result}${opacity})`;
};
