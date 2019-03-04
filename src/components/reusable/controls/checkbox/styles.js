import styled, { css } from 'styled-components';
import { getBaseColor, getBGColor } from '../../../../styles/styles';

const getSize = ({ size }) => size || 16;

export const StyledInputLabel = styled.span`
    user-select: none;
    margin: 0 5px;
    cursor: pointer;
    color: ${getBaseColor};
    
    strong {
      color: red;
    }
`;

export const StyledCustomBox = styled.span`
  display: inline-block;
  vertical-align: middle;
  
  &::before {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    content: '';
    height: ${getSize}px;
    width: ${getSize}px;
    border: 1px solid ${getBaseColor};
    border-radius: 4px;
  }
`;

const disabledStylesOnHover = css`
   opacity: .5;
   ${StyledCustomBox}::before {
     content: '✓';
     opacity: .5;
     border-color: ${getBaseColor};
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
  display: inline-block;
  margin: 10px;
  input {
    display: none;
  }
  
  &:hover {
    ${StyledInputLabel} {
      color: ${getBaseColor};
    }
    
    ${StyledCustomBox} {
      &::before {
        color: ${getBaseColor};
        border-color: ${getBaseColor};
      }
    }
    
    input:checked + ${StyledCustomBox}::before {
      background-color: ${getBaseColor};
      border-color: ${getBaseColor};
    }
    
    ${({ disabled }) => !disabled ? disabledStylesOnHover : ''}
  }
  
  &:active input:active + ${StyledCustomBox}::before {
    content: "●";
    font-size: ${getSize}px; 
    line-height: 1px;
  }
  
  input:checked + ${StyledCustomBox}::before {
    border-color: ${getBaseColor};
    background-color: ${getBaseColor};
    color: ${getBGColor};
    content: '✓';

    &:hover {
      background-color: ${getBaseColor};
      border-color: ${getBaseColor};
    }
  }
  
  ${({ disabled }) => disabled ? disabledStyles : ''}
`;
