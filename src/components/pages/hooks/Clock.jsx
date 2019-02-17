import React from 'react';
import useTimer from './custom-hooks/useTimer';
import { StyledInfoSection } from './styles';

function Clock() {
  return (
    <StyledInfoSection>{useTimer()}</StyledInfoSection>
  );
}

export default Clock;


