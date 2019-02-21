import styled from 'styled-components';

export const ContextMenuContainer = styled.div`
  background-color ${({ theme: { backgroundColor } }) => backgroundColor};
  position: absolute;
`;
