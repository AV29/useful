import styled from 'styled-components';
import * as vars from '../../../../styles/variables';

const lineThickness = 2;

export const StyledMenuOpener = styled.div`
  opacity: 0.7;
  cursor: pointer;
  align-self: center;
  margin: 15px;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  position: relative;
  &:before, &:after {
    transition: width 150ms ${vars.transitionStyle};
    width: ${({ size, collapsed }) => (size * Math.sqrt(2) - lineThickness) / (collapsed ? 2 : 1)}px;
    position: absolute;
    left: ${({ size, collapsed }) => collapsed ? size / 4 : 0}px;
    height: ${lineThickness}px;
    content: '';
    transform-origin: left;
    background-color: ${({ theme: { baseColor } }) => baseColor};
  }
  &:before {
    top: 0;
    transform: rotate(45deg);
  }
  &:after {
    bottom: 0;
    transform: rotate(-45deg);
  }
`;
