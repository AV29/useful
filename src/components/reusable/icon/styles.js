import styled from 'styled-components';
import { getBaseColor } from '../../../styles/styles';

export const StyledIcon = styled.span`
    display: flex;
    justify-content: center;
    ${({ disabled }) => disabled ? 'pointer-events: none; opacity: 0.5;' : ''}
    svg {
      fill: ${getBaseColor};
      width: ${({ size }) => size}px;
      height: ${({ size }) => size}px;
      display: block;
    }
`;
