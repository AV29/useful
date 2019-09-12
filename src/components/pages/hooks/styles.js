import styled from 'styled-components';
import { SmallHeading } from '../../../styles/styles';

export const StyledEditForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledInfoSection = styled.h2`
  text-align: center;
  padding: 5px 0;
`;

export const StyledContextMenuDemoTarget = styled(SmallHeading)`
  user-select: none;
  cursor: context-menu;
`;

export const StyledLinkList = styled.ul`
  height: 290px;
  width: 100%;
  overflow: auto;
`;
