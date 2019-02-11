import React from 'react';
import useTimer from './useTimer';

function Clock() {

  return (
    <h1>{useTimer()}</h1>
  );
}

export default Clock;


