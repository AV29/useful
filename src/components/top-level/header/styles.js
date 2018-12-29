import styled from 'styled-components';

export const StyledHeader = styled.div`
    font-size: 20px;
    padding: 20px;
    text-align: center;
    color: ${({ theme: { color } }) => color};
    box-shadow: 0 0 10px grey;
    z-index: 1;
`;
