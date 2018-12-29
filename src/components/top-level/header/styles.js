import styled from 'styled-components';
import { pickedBorderColor } from '../../../styles/variables';

export const StyledHeader = styled.div`
    font-size: 20px;
    padding: 20px;
    box-shadow: 0 0 10px ${pickedBorderColor};
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme: { color } }) => color};
`;

export const StyledTitleHolder = styled.div`
    flex: 1;
    text-align: center;
`;
