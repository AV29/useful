import React from 'react';
import styled, { css } from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import { getRGBA } from './utils';

const getFontColor = ({ theme: { nav: { fontColor } } }) => fontColor;
const getBorderColor = ({ theme: { nav: { borderColor } } }) => borderColor;
const getBGColor = ({ theme: { nav: { backgroundColor } } }) => backgroundColor || '#263a4c';
const getFontStyle= ({ theme: { nav: { fontStyle } } }) => fontStyle;
const getFontSize= ({ theme: { nav: { fontSize } } }) => fontSize;
const getBGSelectedColor = ({ theme: { nav: { selectedBgColor = '#ffffff', selectedOpacity = 5 } } }) => getRGBA(selectedBgColor, selectedOpacity / 100);

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
  ${props => props.isAccordion ? 'max-width: unset;' : ''};
  ${props => props.isRoot && !props.isVertical ? isHorizontal : ''};
  ${props => props.isRoot && props.isMinimized ? 'min-width: unset;' : ''};
  ${props => props.isRoot && props.isAccordion ? 'min-width: 250px;' : ''};
  ${props => !props.isRoot && !props.isAccordion ? 'box-shadow: 1px 2px 3px lightgrey' : ''};
`;

export const StyledMenuItem = styled(({ isOpened, isBottom, ...props }) => <MenuItem {...props} />)`
  && { 
    background-color: ${props => props.isOpened ? getBGSelectedColor(props) : 'transparent'};
    border-${props => props.isBottom ? 'bottom' : 'left'}: 3px solid ${props => props.isOpened ? getBorderColor(props) : 'transparent'};
    padding: 10px 15px;
    justify-content: space-between;    
    
    &:hover {
      background-color: ${getBGSelectedColor};
    }
  }
`;

export const StyledTitle = styled.span`
  font-size: ${getFontSize}px;
  margin-right: 15px;
`;

export const StyledIcon = styled.span`
  margin-right: 15px;
`;
