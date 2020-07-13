import React from 'react';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import { getBaseColor, getBGColor, getShadowColor } from '../../../../styles/styles';

export const StyledOpenIndicator = styled.div`
  border-radius: 50%;
  width: 7px;
  height: 7px;
  border: 1px solid ${getBaseColor};
  background-color: ${props => props.isCollapsed ? getBaseColor(props) : getBGColor(props)}
`;

export const StyledMenuList = styled.div`
  color: ${getBaseColor};
  background-color: ${getBGColor};
`;

export const StyledMenuItem = styled(MenuItem)`
  && { 
    padding: 10px 15px;
    font-size: 14px;
    justify-content: space-between;    
  }
`;

export const StyledPaper = styled.div`
  min-width: 100px;
  max-width: 200px;
  box-shadow: 1px 2px 5px ${getShadowColor};
  border-radius: 4px;
  margin-${props => props.isPlacedBottom ? 'top' : 'left'}: 8px;
`;
