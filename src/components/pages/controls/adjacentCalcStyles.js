import styled from 'styled-components';
import { Icon } from '../../reusable/icon/Icon';
import { transitionStyle } from '../../../styles/variables';

export const StyledAdjacentCalcContainer = styled.div`
  font-size: 14px;
  user-select: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledControlsBlock = styled.div`
  margin-bottom: 15px;
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const StyledNumbersWrapper = styled.div`
  ${(({ isBlocked }) => isBlocked ? 'opacity: .4; cursor: not-allowed' : '')}
`;

export const StyledNumberCell = styled.span`
  min-width: 35px;
  padding: 8px 4px;
  margin: 1px;
  display: inline-block;
  border-radius: 10px;
  ${(({ isTarget, theme: { backgroundColor, baseColor } }) => isTarget ? `color: ${backgroundColor}; background-color: ${baseColor}` : '')}
`;

export const StyledRefresher = styled(Icon)`
  cursor: pointer;
  &:hover {
    transition: transform .5s ${transitionStyle};
    transform: rotate(90deg);
  }
`;
