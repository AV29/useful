import React from 'react';
import styled, { css } from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';

const getFontColor = ({ theme: { nav: { fontColor } } }) => fontColor;
const getBorderColor = ({ theme: { nav: { borderColor } } }) => borderColor;
const getShadowColor = ({ theme: { nav: { shadowColor } } }) => shadowColor;
const getBGColor = ({ theme: { nav: { backgroundColor } } }) => backgroundColor;
const getFontStyle= ({ theme: { nav: { fontStyle } } }) => fontStyle;
const getFontSize= ({ theme: { nav: { fontSize } } }) => fontSize;
const getIconSize= ({ theme: { nav: { iconSize } } }) => iconSize || 10;

export const StyledOpenIndicator = styled.div`
  border-radius: 50%;
  width: 7px;
  height: 7px;
  border: 1px solid ${getFontColor};
  background-color: ${props => props.isOpened ? getBGColor(props) : getFontColor(props)}
`;

export const StyledMenuList = styled.div`
  border-radius: 4px;
  margin-${props => props.isBottom ? 'top' : 'left'}: 8px;
`;

const isHorizontal = css`
  display: flex;
  align-items: center;
  max-width: unset;
`;

export const StyledMenuWrapper = styled.div`
  max-width: 200px;
  min-width: 150px;
  color: ${getFontColor};
  background-color: ${getBGColor};
  font-style: ${getFontStyle};
  ${props => props.isRoot && !props.isVertical ? isHorizontal : ''};
  ${props => props.isRoot && props.isMinimized ? 'min-width: unset;' : ''};
  ${props => props.isRoot && props.isAccordion ? css`min-width: 250px;` : ''};
  ${props => !props.isRoot && !props.isAccordion ? css`box-shadow: 1px 2px 3px lightgrey` : ''};
`;

export const StyledMenuItem = styled(({ isOpened, ...props }) => <MenuItem {...props} />)`
  && { 
    background-color: ${props => props.isOpened ? 'rgba(0, 0, 0, 0.05)' : 'transparent'};
    border-left: 3px solid ${props => props.isOpened ? getBorderColor(props) : 'transparent'};
    padding: 10px 15px;
    justify-content: space-between;    
  }
`;

export const StyledTitle = styled.span`
  font-size: ${getFontSize}px;
  margin-right: 15px;
`;

export const StyledIcon = styled.span`
  display: inline-block;
  width: ${getIconSize}px;
  height: ${getIconSize}px;
  
  svg {
    fill: ${getFontColor};
    width: ${getIconSize}px;
    height: ${getIconSize}px;
  }
  margin-right: 15px;
`;
