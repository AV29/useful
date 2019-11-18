import styled from 'styled-components';
import { getBorderColor } from '../../../styles/styles';
import Slider from '../../reusable/controls/slider/Slider';

export const SliderContainer = styled(Slider)`
  font-size: 14px;
`;

export const SpiralSpeedSlider = styled(Slider)`
  width: 60%;
`;

export const IdleIndicatorContainer = styled.div`
  position: relative;
  height: 20px;
  margin: 10px;
  border: 1px solid ${getBorderColor}
`;

export const StyledTreeViewContainer = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 20px;
  height: 300px;
  overflow: auto;
  border: 1px solid ${getBorderColor}
`;

export const StyledTraverseResult = styled.div`
  margin: 0 15px;
  display: flex;
  flex-direction: column;
`;

export const StyledMatrix = styled.div`
  margin-top: 10px;
  position: relative;
  
  & > span {
    position: absolute;
  }
`;
