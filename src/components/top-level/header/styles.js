import styled from 'styled-components';
import { getShadowColor } from '../../../styles/styles';

export const StyledHeader = styled.div`
    font-size: 20px;
    padding: 5px 10px;
    box-shadow: 0 0 10px ${getShadowColor};
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
