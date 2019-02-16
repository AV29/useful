import styled from 'styled-components';
import { FlexColumn } from '../../../styles/styles';

export const StyledRenderPropContent = styled(FlexColumn)`
  margin: 20px;
  border: 1px solid ${({ theme: { borderColor } }) => borderColor};
  padding: ${({ padding }) => padding}px;
`;
