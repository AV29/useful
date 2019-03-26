import styled from 'styled-components';
import { getBaseColor } from '../../../../styles/styles';

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
  position: relative;
  label {
    margin-bottom: 5px;
  }
`;

export const StyledInput = styled.input`
  border-radius: 4px;
  padding: 5px;
  color: ${getBaseColor};
  background-color: ${({ readOnly, theme: { borderColor } }) => readOnly ? borderColor : 'transparent'};
  cursor: ${({ readOnly }) => readOnly ? 'not-allowed' : 'text'};
  margin-bottom: ${({ withValidation }) => withValidation ? 5 : 0}px;
`;

export const StyledError = styled.div`
  font-size: 10px;
  position: absolute;
  color: tomato;
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  white-space: nowrap;
`;
