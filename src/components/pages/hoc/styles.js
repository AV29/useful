import styled from 'styled-components';

export const StyledTestResizerWrapper = styled.div`
  border: 2px solid ${({ theme: { borderColor } }) => borderColor};
  padding: 10px;
`;
