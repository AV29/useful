import styled, { css } from 'styled-components';

const minTooltipWidth = 150;
const tooltipBgColor = 'rgba(0, 0, 0, 0.8)';

const fadeInStyles = `
  transition: opacity .3s ease;
  opacity: 1;
`;

const fadeOutStyles = 'opacity: 0;';

const leftStyles = `
  box-shadow: 5px 0 20px rgba(120, 120, 120, 1);
  &:after {
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    border-color: transparent transparent transparent ${tooltipBgColor};
  }
`;

const rightStyles = `
  box-shadow: -5px 0 20px rgba(120, 120, 120, 1);
  &:after {
    top: 50%;
    right: 100%;
    transform: translateY(-50%);
    border-color: transparent ${tooltipBgColor} transparent transparent;
  }
`;

const topStyles = `
  box-shadow: 0 5px 20px rgba(120, 120, 120, 1);
  &:after {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-color: ${tooltipBgColor} transparent transparent transparent;
  }
`;

const bottomStyles = `
  box-shadow: 0 -5px 20px rgba(120, 120, 120, 1);
  &:after {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-color: transparent transparent ${tooltipBgColor} transparent;
  }
`;

export const StyledTooltip = styled.div`
  position: absolute;
  background-color: ${tooltipBgColor};
  z-index: 1000;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1.4rem;
  color: white;
  pointer-events: none;
  min-width: ${minTooltipWidth}px;
  
  &:after {
    content: " ";
    position: absolute;
    border-style: solid;
  }
  
  ${({ fading }) => fading ? css`${fadeInStyles}` : css`${fadeOutStyles}`} 
  ${({ position }) => position === 'left' ? css`${leftStyles}` : ''} 
  ${({ position }) => position === 'right' ? css`${rightStyles}` : ''} 
  ${({ position }) => position === 'top' ? css`${topStyles}` : ''} 
  ${({ position }) => position === 'bottom' ? css`${bottomStyles}` : ''} 
`;
