import styled from 'styled-components';

const trackHeight = 5;
const thumbHeight = 20;

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
  height: ${trackHeight}px;
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
  width: 7px;
  height:  ${thumbHeight}px;
  border-radius: 4px;
  position: absolute;
  top: ${trackHeight / 2}px;
  left: ${({ leftOffset }) => leftOffset}%;
  border: 1px solid ${({ theme: { backgroundColor } }) => backgroundColor};
  background-color: ${({ theme: { shadowColor } }) => shadowColor};
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
  background-color: ${({ theme: { baseColor } }) => baseColor};
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
