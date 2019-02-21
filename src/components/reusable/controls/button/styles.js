import styled, { css } from 'styled-components';

const disabledStyles = `
  opacity: .4;
  pointer-events: none;
  color: ${({ theme: { shadowColor } }) => shadowColor};
`;

export const StyledButton = styled.button`
  margin: 10px; 
  padding: 5px 10px;
  border-radius: 4px;
  color: ${({ theme: { baseColor } }) => baseColor};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  border: 1px solid ${({ theme: { borderColor } }) => borderColor};
  cursor: pointer;
  box-shadow: 0 0 10px ${({ theme: { shadowColor } }) => shadowColor};
  ${({ disabled }) => disabled ? css`${disabledStyles}` : ''} 
  :active {
    box-shadow: 0 0 1px ${({ theme: { shadowColor } }) => shadowColor};
  }
`;
