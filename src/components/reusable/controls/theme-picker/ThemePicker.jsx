import React, { Component } from 'react';
import { string, func, shape, arrayOf } from 'prop-types';
import { StyledThemePicker, StyledThemeMarker, ThemeMarker, ThemeProp } from './styles';
import { FlexRow, FlexColumn } from '../../../../styles/styles';
import decapitalize from '../../../../utilities/decapitalize';
import Tooltip from '../../tooltip/Tooltip';

class ThemePicker extends Component {
  render() {
    return (
      <StyledThemePicker>
        {
          this.props.themes.map(({ id, ...theme }) => (
            <Tooltip
              key={id}
              withoutTip
              renderHoverTarget={({ bindRef }) => (
                <StyledThemeMarker
                  id={id}
                  ref={bindRef}
                  color={theme.backgroundColor}
                  onClick={() => this.props.onChange(id)}
                />
              )}
            >
              <FlexColumn align="stretch">
                {Object.keys(theme).map((themeProp, index) => (
                  <FlexRow key={index} justify="space-between">
                    <ThemeProp>{decapitalize(themeProp)}</ThemeProp>
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
