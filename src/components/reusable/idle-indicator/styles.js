import styled from 'styled-components';

export const StyledIdleIndicator = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 0;
  box-sizing: border-box;
  background-color: ${({ theme: { color } }) => color};
  z-index: 10;
`;
