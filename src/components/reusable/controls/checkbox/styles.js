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
  }
  
  input:checked + ${StyledCustomBox}::before {
    border-color: ${getBaseColor};
    background-color: ${getBaseColor};
    color: ${getBGColor};
    line-height: 1px;
    content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTRweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTQgMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+UGF0aDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQmFzaWMtSW5wdXRzL0NoZWNrYm94ZXMvLURlZmF1bHQvLVNlbGVjdGVkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi4wMDAwMDAsIC00LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yNCI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjcgMTQgMiA5LjIwMTUzNTUxIDMuNDEgNy44NDgzNjg1MiA3IDExLjI4NDA2OTEgMTQuNTkgNCAxNiA1LjM2Mjc2MzkyIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==');

    &:hover {
      background-color: ${getBaseColor};
      border-color: ${getBaseColor};
    }
  }
  
  ${({ disabled }) => disabled ? disabledStyles : ''}
`;
