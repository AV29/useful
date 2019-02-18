import styled from 'styled-components';

export const ContextMenuContainer = styled.div`
  background-color ${({ theme: { bgColor } }) => bgColor};
  position: absolute;
`;
