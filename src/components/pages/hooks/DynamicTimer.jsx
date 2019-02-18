import React, { useState } from 'react';
import useDynamicInterval from './custom-hooks/useDynamicInterval';
import Button from '../../reusable/controls/button/Button';
import Input from '../../reusable/controls/input/Input';
import { FlexColumnCenter } from '../../../styles/styles';
import PropTypes from 'prop-types';

function DynamicTimer() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isCounting, setIsCounting] = useState(false);

  useDynamicInterval(() => setCount(count + 1), isCounting ? delay : null);

  return (
    <FlexColumnCenter>
      <Input
        id="delay"
        label="Delay"
        value={delay}
        onChange={({ target: { value } }) => setDelay(+value)}
        style={{ textAlign: 'center' }}
      />
      <Button onClick={() => setIsCounting(!isCounting)}>{isCounting ? 'Pause' : 'Play'}</Button>
      <h2>{count}</h2>
    </FlexColumnCenter>
  );
}

DynamicTimer.propTypes = {
  name: PropTypes.string
};

export default DynamicTimer;
