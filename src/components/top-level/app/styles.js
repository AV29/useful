import styled from 'styled-components';
import { getBaseColor, getBGColor } from '../../../styles/styles';

export const StyledAppWrapper = styled.div`
  display: flex;
  background-color: ${getBGColor};
  color: ${getBaseColor};
  flex-direction: column;
  height: 100vh;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  overflow: auto;
`;

export const StyledRoutesWrapper = styled.div`
  flex: 1;
  padding: 15px 30px;  
  overflow: auto;
`;
