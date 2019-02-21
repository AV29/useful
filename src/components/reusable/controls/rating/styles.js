import styled from 'styled-components';
import { Icon } from '../../icon/Icon';
import { Flex } from '../../../../styles/styles';

export const StyledRatingControl = styled.div`
    font-size: 14px;
`;

export const StyledRatingItem = styled(Icon)`
    cursor: pointer;
    svg {
      fill: ${({ rated, theme: { baseColor, borderColor } }) => rated ? baseColor : borderColor}
    }
`;

export const ItemsWrapper = styled(Flex)`
    margin-top: 15px;
`;
