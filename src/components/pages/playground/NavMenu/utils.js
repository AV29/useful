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

export const getRGBA = (hexColor, opacity) => {
  const color = hexColor.charAt(0) === '#' ? hexColor.slice(1) : hexColor;
  const rgba = { alpha: opacity };
  if (!hexColor) {
    return { alpha: 0, red: 255, green: 255, blue: 255 };
  }
  ['red', 'green', 'blue'].forEach((ch, i) => {
    const channel = parseInt(color.slice(2 * i, 2 * (i + 1)), 16);
    rgba[ch] = !Number.isNaN(channel) ? channel : 255;
  });

  console.log(rgba);
  return `rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${rgba.alpha})`;
};
