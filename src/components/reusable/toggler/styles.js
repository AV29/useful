import styled from 'styled-components';
import * as vars from '../../../styles/variables';

const lineThickness = 2;

export const StyledToggler = styled.div`
  opacity: 0.7;
  cursor: pointer;
  align-self: center;
  margin: 10px;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  position: relative;
  &:before, &:after {
    transition: all 150ms ${vars.transitionStyle};
    width: ${lineThickness}px;
    position: absolute;
    top: ${({ collapsed }) => collapsed ? `${lineThickness}px` : 0};
    left: ${({ size }) => (size - lineThickness) / 2}px;
    height: ${({ collapsed }) => collapsed ? '65%' : '100%'};
    content: '';
    transform-origin: ${({ collapsed }) => collapsed ? 'right center' : 'center'};
    background-color: ${({ theme: { color } }) => color};
  }
  &:before {
    transform: ${({ collapsed }) => collapsed ? 'translateY(-35%) rotate(-45deg)' : 'rotate(-45deg)'};
  }
  &:after {
    transform: ${({ collapsed }) => collapsed ? 'translateY(35%) rotate(45deg)' : 'rotate(45deg)'};
  }
`;
