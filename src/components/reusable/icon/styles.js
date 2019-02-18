import styled from 'styled-components';

export const StyledIcon = styled.span`
    display: flex;
    justify-content: center;
    svg {
      width: ${({ size }) => size}px;
      height: ${({ size }) => size}px;
      display: block;
    }
`;
