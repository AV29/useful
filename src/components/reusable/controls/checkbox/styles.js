import styled, { css } from 'styled-components';

const getSize = ({ size }) => size || 16;

export const StyledInputLabel = styled.span`
    user-select: none;
    margin: 0 5px;
    display: inline-block;
    height: 100%;
    width: 100%;
    cursor: pointer;
    color: ${({ theme: { baseColor } }) => baseColor};
    
    strong {
      color: red;
    }
`;

export const StyledCustomBox = styled.span`
  &::before {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    content: '';
    height: ${getSize}px;
    width: ${getSize}px;
    border: 1px solid ${({ theme: { baseColor } }) => baseColor};
    border-radius: 4px;
  }
`;

const disabledStylesOnHover = css`
   opacity: .5;
   ${StyledCustomBox}::before {
     content: '✔';
     opacity: .5;
     border-color: ${({ theme: { baseColor } }) => baseColor};
   }
`;

const disabledStyles = css`
  pointer-events: none;

  ${StyledInputLabel},
  ${StyledCustomBox}::before {
    opacity: .5;
  }

  input:checked + ${StyledCustomBox}::before {
    
    opacity: .5;
  }
`;

export const StyledLabelWrapper = styled.label`
  position: relative;
  display: flex;
  margin: 10px;
  input {
    display: none;
  }
  
  &:hover {
    ${StyledInputLabel} {
      color: ${({ theme: { baseColor } }) => baseColor};
    }
    
    ${StyledCustomBox} {
      &::before {
        color: ${({ theme: { baseColor } }) => baseColor};
        border-color: ${({ theme: { baseColor } }) => baseColor};
      }
    }
    
    input:checked + ${StyledCustomBox}::before {
      background-color: ${({ theme: { baseColor } }) => baseColor};
      border-color: ${({ theme: { baseColor } }) => baseColor};
    }
    
    ${({ disabled }) => !disabled ? disabledStylesOnHover : ''}
  }
  
  &:active input:active + ${StyledCustomBox}::before {
    content: "●";
    font-size: ${getSize}px; 
    line-height: 1px;
  }
  
  input:checked + ${StyledCustomBox}::before {
    border-color: ${({ theme: { baseColor } }) => baseColor};
    background-color: ${({ theme: { baseColor } }) => baseColor};
    color: ${({ theme: { backgroundColor } }) => backgroundColor};
    content: '✔';

    &:hover {
      background-color: ${({ theme: { baseColor } }) => baseColor};
      border-color: ${({ theme: { baseColor } }) => baseColor};
    }
  }
  
  ${({ disabled }) => disabled ? disabledStyles : ''}
`;
