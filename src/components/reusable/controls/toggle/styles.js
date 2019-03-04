import styled from 'styled-components';
import { transitionStyle } from '../../../../styles/variables';
import { Flex, getShadowColor, getBaseColor, getBGColor } from '../../../../styles/styles';

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
  background-color: ${getBaseColor};
  box-shadow: inset -1px 1px 4px ${getShadowColor};
  border-radius: ${switchBorderRadius}px;
  overflow: hidden;
`;

export const StyledSlider = styled.span`
  display: inline-block;
  height: 100%;
  width: 100%;
  cursor: pointer;
  background-color: ${getBGColor};
  transform: translateX(0);
  border-radius: ${switchBorderRadius}px;
  transition: transform 0.2s ${transitionStyle};
  box-shadow: inset -1px 1px 4px ${getShadowColor};

  &:before {
    display: inline-block;
    content: '';
    height: ${toggleDiameter}px;
    width: ${toggleDiameter}px;
    border-radius: 50%;
    background-color: ${getBGColor};
    border: ${toggleMargin}px solid ${getBaseColor};
  }
`;

export const StyledInput = styled.input`
    display: none;
    
    &:checked + ${StyledSlider} {
      transform: translateX(${toggleDiameter - (2 * toggleMargin)}px);
    }
`;
