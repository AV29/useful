import styled from 'styled-components';
import { SmallHeading } from '../../../styles/styles';

export const StyledEditForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledInfoSection = styled.h2`
  text-align: center;
`;

export const StyledContextMenuDemoTarget = styled(SmallHeading)`
  user-select: none;
  cursor: context-menu;
`;

export const StyledLinkList = styled.ul`
  height: 200px;
  width: 100%;
  overflow: auto;
`;

export const StyledDynamicCounter = styled.h2`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;
