import styled from 'styled-components';
import { getShadowColor, getBGColor } from '../../../styles/styles';

export const StyledResizerWrapper = styled.div`
  position: relative;
  user-select: none;
`;

export const StyledResizeHandler = styled.div`
  background-color: ${getBGColor};
  box-shadow: 1px 0 5px ${getShadowColor};
  position: absolute;
  width: 5px;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 1;
  &:hover {
    cursor: ew-resize;
  }
`;
