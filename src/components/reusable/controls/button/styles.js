import styled, { css } from 'styled-components';
import * as vars from '../../../../styles/variables';

const disabledStyles = `
  opacity: .4;
  pointer-events: none;
  color: ${({ theme: { shadowColor } }) => shadowColor};
`;

export const StyledButton = styled.button`
  margin: 10px; 
  padding: 5px 10px;
  border-radius: 4px;
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { bgColor } }) => bgColor};
  border: 1px solid ${({ theme: { borderColor } }) => borderColor};
  cursor: pointer;
  transition: all 200ms ${vars.transitionStyle};
  box-shadow: 0 0 10px ${({ theme: { shadowColor } }) => shadowColor};
  ${({ disabled }) => disabled ? css`${disabledStyles}` : ''} 
  :active {
    box-shadow: 0 0 1px ${({ theme: { shadowColor } }) => shadowColor};
  }
`;
