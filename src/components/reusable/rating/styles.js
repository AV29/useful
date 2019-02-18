import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { Flex } from '../../../styles/styles';

export const StyledRatingControl = styled.div`
    font-size: 14px;
`;

export const StyledRatingItem = styled(Icon)`
    svg {
      fill: ${({ rated, theme: { color, borderColor } }) => rated ? color : borderColor}
    }
`;

export const ItemsWrapper = styled(Flex)`
    margin-top: 15px;
`;
