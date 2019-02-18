import styled from 'styled-components';

export const StyledIcon = styled.span`
    display: flex;
    justify-content: center;
    svg {
      fill: ${({ theme: { color } }) => color}
      width: ${({ size }) => size}px;
      height: ${({ size }) => size}px;
      display: block;
    }
`;
