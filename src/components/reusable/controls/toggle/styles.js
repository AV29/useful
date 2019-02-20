import styled from 'styled-components';
import { transitionStyle } from '../../../../styles/variables';
import { Flex } from '../../../../styles/styles';

const toggleMargin = 2;
const toggleDiameter = 20;

const switchWidth = toggleDiameter * 2;
const switchHeight = toggleDiameter + (2 * toggleMargin);
const switchBorderRadius = (switchWidth - ((2 * toggleMargin)));

export const StyledToggle = styled(Flex)`
  align-items: center;
  flex-direction: ${({ leftLabel }) => leftLabel ? 'row-reverse' : 'row'};
  justify-content: ${({ leftLabel }) => leftLabel ? 'flex-end' : 'flex-start'};
  font-size: 1.4rem;
  margin: 10px;
`;

export const StyledLabel = styled.label`
  width: ${switchWidth}px;
  height: ${switchHeight}px;
  min-width: ${switchWidth}px;
  min-height: ${switchHeight}px;
  display: inline-block;
  margin-${({ leftLabel }) => leftLabel ? 'left' : 'right'}: 10px;
`;

export const StyledSlider = styled.span`
  display: inline-block;
  height: 100%;
  width: 100%;
  cursor: pointer;
  border-radius: ${switchBorderRadius}px;
  background-color: ${({ theme: { borderColor } }) => borderColor};

  &:before {
    display: inline-block;
    content: '';
    height: ${toggleDiameter}px;
    width: ${toggleDiameter}px;
    border-radius: 50%;
    background-color: ${({ theme: { bgColor } }) => bgColor};
    transition: transform 0.2s ${transitionStyle};
    margin: ${toggleMargin}px;
    transform: translateX(0);
  }
`;

export const StyledInput = styled.input`
    display: none;
    
    &:checked + ${StyledSlider} {
      background-color: ${({ theme: { color } }) => color};

      &:before {
        transform: translateX(${toggleDiameter - (2 * toggleMargin)}px);
      }
    }

    &:focus + ${StyledSlider} {
      box-shadow: 0 0 1px ${({ theme: { color } }) => color};
    }
`;
