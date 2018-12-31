import styled from 'styled-components';

export const StyledAppWrapper = styled.div`
  display: flex;
  background-color: ${({ theme: { bgColor } }) => bgColor};
  color: ${({ theme: { color } }) => color};
  svg {
      fill: ${({ theme: { color } }) => color}
  }
  flex-direction: column;
  height: 100vh;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

export const StyledRoutesWrapper = styled.div`
  flex: 1;
  padding: 30px;  
  overflow: auto;
`;
