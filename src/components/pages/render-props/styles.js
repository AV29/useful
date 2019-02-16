import styled from 'styled-components';
import TestContainer from './TestContainer';

export const StyledTestContainer = styled(TestContainer)`
  padding: 20px;
  margin: 20px;
  border: 1px solid ${({ theme: { borderColor } }) => borderColor};
`;
