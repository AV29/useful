import styled, { css } from 'styled-components';
import { getShadowColor } from '../../../styles/styles';

const tooltipBgColor = 'rgba(0, 0, 0, 0.8)';

export const StyledTooltip = styled.div`
  position: absolute;
  background-color: ${tooltipBgColor};
  z-index: 1000;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1.4rem;
  color: white;
  pointer-events: none;
  min-width: 150px;
  
  &:after {
    content: " ";
    position: absolute;
    border-style: solid;
  }
  
  ${getFadeStyles} 
  ${getTooltipStyles} 
`;

function getFadeStyles ({ fading }) {
  return fading ?
    css`transition: opacity .3s ease; opacity: 1;` :
    css`opacity: 0;`;
}

function getTooltipStyles ({ withoutTip, orientation, theme: { shadowColor } }) {
  if (withoutTip) {
    return css`
      box-shadow: 5px 0 20px ${shadowColor};
      &:after {
        display: none;
      }
    `;
  }
  switch (orientation) {
    case 'left': {
      return css`
          box-shadow: 5px 0 20px ${shadowColor};
          &:after {
            top: 50%;
            left: 100%;
            transform: translateY(-50%);
            border-color: transparent transparent transparent ${tooltipBgColor};
          }
        `;
    }

    case 'right': {
      return css`
          box-shadow: -5px 0 20px ${shadowColor};
          &:after {
            top: 50%;
            right: 100%;
            transform: translateY(-50%);
            border-color: transparent ${tooltipBgColor} transparent transparent;
          }
        `;
    }

    case 'top': {
      return css`
          box-shadow: 0 5px 20px ${getShadowColor};
          &:after {
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-color: ${tooltipBgColor} transparent transparent transparent;
          }
        `;
    }

    default: {
      return css`
          box-shadow: 0 -5px 20px ${getShadowColor};
          &:after {
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-color: transparent transparent ${tooltipBgColor} transparent;
          }
        `;
    }
  }
}
