import styled from 'styled-components';
import { FlexColumnCenter } from '../../../styles/styles';

export const StyledRenderPropContent = styled(FlexColumnCenter)`
  border: 3px solid ${({ theme: { borderColor } }) => borderColor};
  padding: ${({ padding }) => padding}px;
`;
