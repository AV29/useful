import styled from 'styled-components';
import { getBGColor, getBorderColor } from '../../../styles/styles';

export const ContextMenuContainer = styled.div`
  background-color: ${getBGColor};
  border: 2px solid ${getBorderColor};
  position: absolute;
`;
