import React from 'react';
import useDateTimer from './custom-hooks/useTimer';
import { StyledInfoSection } from './styles';

function Clock () {
  return (
    <StyledInfoSection>{useDateTimer()}</StyledInfoSection>
  );
}

export default Clock;


