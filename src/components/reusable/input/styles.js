import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  label {
    margin-bottom: 5px;
  }
`;

export const StyledInput = styled.input`
  border-radius: 4px;
  padding: 5px;
  color: ${({ theme: { color } }) => color};
  background-color: ${({ readOnly, theme: { borderColor } }) => readOnly ? borderColor : 'transparent'};
  cursor: ${({ readOnly }) => readOnly ? 'not-allowed' : 'text'};
`;
