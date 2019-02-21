import styled from 'styled-components';
import { FlexColumn, SmallHeading } from '../../../styles/styles';

export const StyledRenderPropContent = styled(FlexColumn)`
  border: 3px solid ${({ theme: { borderColor } }) => borderColor};
  padding: ${({ padding }) => padding}px;
  user-select: none;
`;

export const StyledList = styled.ul`
  border: 2px solid ${({ theme: { borderColor } }) => borderColor};
  padding: 10px;
  user-select: none;
  list-style-type: none;
  min-width: 100px;
  color: ${({ theme: { color } }) => color};
  li {
    padding: 10px 5px;
    font-size: 1.4rem;
    &:hover {
      font-weight: 900;
      cursor: pointer;
    }
  }
`;

export const ContextMenuCaller = styled(SmallHeading)`
  border: 1px solid ${({ theme: { borderColor } }) => borderColor};
  border-radius: 4px;
  margin-right: 10px;
  padding: 10px;
  transition: all .15s ease;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px ${({ theme: { shadowColor } }) => shadowColor};
  }
`;

export const TooltipHoverTarget = styled(SmallHeading)`
  border: 1px solid ${({ theme: { borderColor } }) => borderColor};
  border-radius: 4px;
  padding: 10px;
  display: inline-block;
`;
