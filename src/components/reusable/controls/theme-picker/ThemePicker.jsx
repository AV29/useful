import React from 'react';
import { string, func, shape, arrayOf } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StyledThemePicker, StyledThemeMarker, ThemeMarker, ThemeProp } from './styles';
import { FlexRow, FlexColumn } from '../../../../styles/styles';
import Tooltip from '../../tooltip/Tooltip';

function ThemePicker (props) {
  const { t } = useTranslation('common');
  return (
    <StyledThemePicker>
      {
        props.themes.map(({ id, ...theme }) => (
          <Tooltip
            key={id}
            withoutTip
            renderHoverTarget={({ bindRef }) => (
              <StyledThemeMarker
                id={id}
                ref={bindRef}
                color={theme.backgroundColor}
                onClick={() => props.onChange(id)}
              />
            )}
          >
            <FlexColumn align="stretch">
              {Object.keys(theme).map((themeProp, index) => (
                <FlexRow key={index} justify="space-between">
                  <ThemeProp>{t(themeProp)}</ThemeProp>
                  <ThemeMarker style={{ backgroundColor: theme[themeProp] }}/>
                </FlexRow>
              ))}
            </FlexColumn>
          </Tooltip>
        ))
      }
    </StyledThemePicker>
  );
}

ThemePicker.propTypes = {
  onChange: func,
  themes: arrayOf(shape({
    id: string.isRequired,
    baseColor: string,
    backgroundColor: string,
    shadowColor: string,
    borderColor: string
  })),
  theme: shape({
    id: string.isRequired,
    baseColor: string,
    backgroundColor: string,
    shadowColor: string,
    borderColor: string
  })
};

export default ThemePicker;
