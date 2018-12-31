import styled from 'styled-components';

const themeMarkerSize = 15;

export const StyledThemePicker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledThemeMarker = styled.div`
  width: ${themeMarkerSize}px;
  height: ${themeMarkerSize}px;
  box-sizing: content-box;
  box-shadow: 0 0 5px ${({ theme: { borderColor } }) => borderColor};
  border-radius: 2px;
  background-color: ${({ color }) => color};
  margin: 5px;
  cursor: pointer;
  border: ${({ id, theme }) => id === theme.id ? `2px solid ${theme.borderColor}` : 'none'};
`;
