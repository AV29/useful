import React from 'react';
import get from 'lodash.get';
import styled, { css } from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import { getRGBA } from './utils';

const navPath = ['theme', 'nav'];

const getFontColor = props => get(props, [...navPath, 'fontColor'], '#ffffff');
const getBorderColor = props => get(props, [...navPath, 'borderColor'], '#00ab4e');
const getBorderWeight = props => get(props, [...navPath, 'borderWeight'], 3);
const getBGColor = props => get(props, [...navPath, 'backgroundColor'], '#263a4c');
const getFontStyle= props => get(props, [...navPath, 'fontStyle'], 'normal');
const getFontSize= props => get(props, [...navPath, 'fontSize'], 12);
const getFontWeight = props => get(props, [...navPath, 'fontWeight'], 'lighter');
const getBGSelectedColor = props => getRGBA(get(props, [...navPath, 'selectedBgColor'], '#ffffff'), get(props, [...navPath, 'selectedOpacity'], 5) / 100);

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
  justify-content: center;
`;

export const StyledMenuWrapper = styled.div`
  max-width: 200px;
  min-width: 150px;
  color: ${getFontColor};
  font-style: ${getFontStyle};
  background-color: ${getBGColor};
  ${props => props.isVertical ? 'height: 100%;' : ''}; 
  ${props => props.isRoot && !props.isVertical ? isHorizontal : ''};
  ${props => props.isRoot && props.isMinimized ? 'min-width: unset;' : ''};
  ${props => props.isRoot && props.isAccordion ? 'min-width: 250px;' : ''};
  ${props => !props.isRoot && props.isAccordion ? 'max-width: unset;' : ''};
  ${props => !props.isRoot && !props.isAccordion ? 'box-shadow: 1px 2px 3px lightgrey' : ''};
`;

export const StyledMenuItem = styled(({ isOpened, isBottom, ...props }) => <MenuItem {...props} />)`
  && { 
    background-color: ${props => props.isOpened ? getBGSelectedColor(props) : 'transparent'};
    border-${props => props.isBottom ? 'bottom' : 'left'}: ${getBorderWeight}px solid ${props => props.isOpened ? getBorderColor(props) : 'transparent'};
    padding: 10px 15px;
    font-weight: ${getFontWeight};
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
