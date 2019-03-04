import styled, { css } from 'styled-components';
import { getShadowColor, getBorderColor, getBaseColor, getBGColor } from '../../../../styles/styles';

const disabledStyles = `
  opacity: .4;
  pointer-events: none;
  color: ${getShadowColor};
`;

export const StyledButton = styled.button`
  margin: 10px; 
  padding: 5px 10px;
  border-radius: 4px;
  color: ${getBaseColor};
  background-color: ${getBGColor};
  border: 1px solid ${getBorderColor};
  cursor: pointer;
  box-shadow: 0 0 10px ${getShadowColor};
  ${({ disabled }) => disabled ? css`${disabledStyles}` : ''} 
  :active {
    box-shadow: 0 0 1px ${getShadowColor};
  }
`;
