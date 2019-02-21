import styled, { css } from 'styled-components';

const themeMarkerSize = 15;

function getChosenThemeStyles ({ id, theme }) {
  return id === theme.id ?
    css`box-shadow: -5px 0 10px ${theme.borderColor}; border: 2px solid ${theme.borderColor}` :
    css`box-shadow: transparent; border: none`;
}

export const StyledThemePicker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeMarker = styled.div`
  width: ${themeMarkerSize}px;
  height: ${themeMarkerSize}px;
  margin: 5px;
  cursor: pointer;
  border-radius: 2px;
`;

export const StyledThemeMarker = styled(ThemeMarker)`
  background-color: ${({ color }) => color};
  ${getChosenThemeStyles}
`;

export const ThemeProp = styled.span`
  margin-right: 10px;
`;


