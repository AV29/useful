import styled from 'styled-components';
import { getShadowColor } from '../../../styles/styles';

export const StyledFooter = styled.div`
    padding: 20px;
    box-shadow: 5px -1px 10px ${getShadowColor};
    text-align: right;
`;
