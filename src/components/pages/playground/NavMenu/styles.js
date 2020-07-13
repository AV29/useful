import React from 'react';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import { getBaseColor, getBGColor, getShadowColor } from '../../../../styles/styles';

export const StyledOpenIndicator = styled.div`
  border-radius: 50%;
  width: 7px;
  height: 7px;
  border: 1px solid ${getBaseColor};
  background-color: ${props => props.isOpened ? getBGColor(props) : getBaseColor(props)}
`;

export const StyledMenuList = styled.div`
  color: ${getBaseColor};
  background-color: ${getBGColor};
  box-shadow: 1px 2px 5px ${getShadowColor};
  border-radius: 4px;
  margin-${props => props.isBottom ? 'top' : 'left'}: 8px;
`;

export const StyledMenuItem = styled(MenuItem)`
  && { 
    padding: 10px 15px;
    font-size: 14px;
    justify-content: space-between;    
  }
`;
