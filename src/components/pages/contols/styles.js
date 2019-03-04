import styled from 'styled-components';
import { getBorderColor } from '../../../styles/styles';
import Slider from '../../reusable/controls/slider/Slider';

export const SliderContainer = styled(Slider)`
  font-size: 14px;
`;

export const IdleIndicatorContainer = styled.div`
  position: relative;
  height: 20px;
  margin: 10px;
  border: 1px solid ${getBorderColor}
`;
