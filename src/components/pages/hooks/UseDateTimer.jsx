import React from 'react';
import useDateTimer from '../../../hooks/useTimer';
import { StyledInfoSection } from './styles';

function UseDateTimer () {
  return (
    <StyledInfoSection>{useDateTimer()}</StyledInfoSection>
  );
}

export default UseDateTimer;


