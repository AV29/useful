import React, { useState } from 'react';
import { FlexRow, FlexColumn } from '../../../styles/styles';
import useDynamicInterval from './useDynamicInterval';
import Button from '../../reusable/button/Button';
import Input from '../../reusable/input/Input';
import PropTypes from 'prop-types';
import Clock from './Clock';

function Hooks(props) {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isCounting, setIsCounting] = useState(false);

  useDynamicInterval(() => setCount(count + 1), isCounting ? delay : null);

  return (
    <FlexRow>
      <FlexColumn>
        <h1>{props.name}</h1>
        <Input
          id="delay"
          label="Delay"
          value={delay}
          onChange={({ target: { value } }) => setDelay(+value)}
          style={{ textAlign: 'center' }}
        />
        <Button onClick={() => setIsCounting(!isCounting)}>{isCounting ? 'Pause' : 'Play'}</Button>
        <h2>{count}</h2>
        <Clock/>
      </FlexColumn>
    </FlexRow>
  );
}

Hooks.propTypes = {
  name: PropTypes.string
};

export default Hooks;
