import React, { useState } from 'react';
import useDynamicInterval from '../../../hooks/useDynamicInterval';
import Button from '../../reusable/controls/button/Button';
import Input from '../../reusable/controls/input/Input';
import { FlexColumn } from '../../../styles/styles';
import { string } from 'prop-types';
import { useTranslation } from 'react-i18next';

function DynamicTimer () {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isCounting, setIsCounting] = useState(false);
  const { t } = useTranslation('common');
  useDynamicInterval(() => setCount(count + 1), isCounting ? delay : null);

  return (
    <FlexColumn>
      <Input
        id="delay"
        label={t('delay')}
        value={delay}
        onChange={({ target: { value } }) => setDelay(+value)}
        style={{ textAlign: 'center' }}
      />
      <Button onClick={() => setIsCounting(!isCounting)}>{isCounting ? t('pause') : t('play')}</Button>
      <h2>{count}</h2>
    </FlexColumn>
  );
}

DynamicTimer.propTypes = {
  name: string
};

export default DynamicTimer;
