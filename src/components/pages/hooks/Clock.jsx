import React from 'react';
import useDateTimer from '../../../hooks/useTimer';
import { StyledInfoSection } from './styles';

function Clock () {
  return (
    <StyledInfoSection>{useDateTimer()}</StyledInfoSection>
  );
}

export default Clock;


