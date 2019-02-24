import styled from 'styled-components';
import { DemoSection, SmallHeading } from '../../../styles/styles';

export const ClickOutsideDemoSection = styled(DemoSection)`
  box-shadow: 0 0 15px ${({ shadowColor }) => shadowColor};
`;

export const ContextMenuCaller = styled(SmallHeading)`
  border: 1px solid ${({ theme: { borderColor } }) => borderColor};
  border-radius: 4px;
  margin-right: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const TooltipHoverTarget = styled(SmallHeading)`
  border: 1px solid ${({ theme: { borderColor } }) => borderColor};
  border-radius: 4px;
  padding: 10px;
  display: inline-block;
`;
