import styled from 'styled-components';
import { SmallHeading, getBorderColor } from '../../../styles/styles';

export const ContextMenuCaller = styled(SmallHeading)`
  border: 1px solid ${getBorderColor};
  border-radius: 4px;
  margin-right: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const TooltipHoverTarget = styled(SmallHeading)`
  border: 1px solid ${getBorderColor};
  border-radius: 4px;
  padding: 10px;
  display: inline-block;
`;

export const MessagesContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
