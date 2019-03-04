import styled, { css } from 'styled-components';
import { getShadowColor } from '../../../../styles/styles';

const isAciveStyles = css`
 font-weight: 900;
 box-shadow: 0 0 5px ${getShadowColor};
`;

export const StyledLanguageSwitcher = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;

export const StyledLocale = styled.span`
  margin-right: 5px;
  padding: 2px 3px;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  
  ${({ isActive }) => isActive ? isAciveStyles : ''};
  
  &:hover {
    font-weight: 900;
  }
`;
