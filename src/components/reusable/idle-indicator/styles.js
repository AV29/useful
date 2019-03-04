import styled from 'styled-components';
import { getBaseColor } from '../../../styles/styles';

export const StyledIdleIndicator = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 0;
  box-sizing: border-box;
  background-color: ${getBaseColor};
  z-index: 10;
`;
