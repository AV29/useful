import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledThemePicker, StyledThemeMarker } from './styles';

class ThemePicker extends Component {
  render () {
    return (
      <StyledThemePicker>
        {
          this.props.themes.map(theme => (
            <StyledThemeMarker
              key={theme.id}
              id={theme.id}
              color={theme.bgColor}
              onClick={() => this.props.onChange(theme)}
            />
          ))
        }
      </StyledThemePicker>
    );
  }
}

ThemePicker.propTypes = {
  onChange: PropTypes.func,
  themes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    shadowColor: PropTypes.string,
    borderColor: PropTypes.string
  })),
  theme: PropTypes.shape({
    id: PropTypes.string.isRequired,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    shadowColor: PropTypes.string,
    borderColor: PropTypes.string
  })
};

export default ThemePicker;
