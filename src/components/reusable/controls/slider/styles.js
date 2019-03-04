import styled from 'styled-components';
import { getShadowColor, getBaseColor, getBGColor } from '../../../../styles/styles';

export const StyledSlider = styled.div`
  user-select: none;
  width: 100%;
`;

export const Label = styled.div`
  margin-bottom: 15px;
  font-weight: 400;
`;

export const Track = styled.div`
  width: 100%;
  height: ${({ thickness }) => thickness}px;
  background-color: #cccccc;
  transition: opacity 0.2s;
  position: relative;
`;

export const TooltipContainer = styled.div`
  visibility: hidden;
  position: absolute;
  top: -150%;
  background-color: #000000;
  color: #ffffff;
  white-space: nowrap;
  transform: translateX(${({ leftOffset }) => -1 * leftOffset}%);
`;

export const Thumb = styled.button`
  cursor: default;
  padding: 0;
  width: ${({ thickness }) => thickness + 2}px;
  height: ${({ thickness }) => thickness * 4}px;
  border-radius: 4px;
  position: absolute;
  top: ${({ thickness }) => thickness / 2}px;
  left: ${({ leftOffset }) => leftOffset}%;
  border: 1px solid ${getBGColor};
  background-color: ${getShadowColor};
  transform: translateY(-50%);
  outline: none;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 1;
     ${TooltipContainer} {
      visibility: visible;
    }
  }
`;

export const Tooltip = styled.div`
  padding: 5px;
  font-size: 1.2rem;
`;

export const FillLower = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  background-color: ${getBaseColor};
  width: ${({ fill }) => fill}%;
`;

export const TickMarks = styled.div`
  width: 100%;
  position: relative;
  margin-top: 10px;
`;

export const TickMark = styled.div`
  position: absolute;
  left: ${({ offset }) => offset}%;
  transform: translateX(${({ offset }) => -1 * offset}%);
`;
