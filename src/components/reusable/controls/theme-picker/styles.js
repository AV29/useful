import styled from 'styled-components';

const themeMarkerSize = 15;

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
  box-shadow: -5px 0 10px ${({ id, theme }) => id === theme.id ? theme.borderColor : 'transparent'};
  background-color: ${({ color }) => color};
  border: ${({ id, theme }) => id === theme.id ? `2px solid ${theme.borderColor}` : 'none'};
`;

export const ThemeProp = styled.span`
  margin-right: 10px;
`;


