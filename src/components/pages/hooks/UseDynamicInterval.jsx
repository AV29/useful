import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { string } from 'prop-types';
import useDynamicInterval from '../../../hooks/useDynamicInterval';
import Button from '../../reusable/controls/button/Button';
import Input from '../../reusable/controls/input/Input';
import { StyledDynamicCounter } from './styles';
import { FlexRow } from '../../../styles/styles';

function UseDynamicInterval () {
  const { t } = useTranslation('common');
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isCounting, setIsCounting] = useState(false);
  useDynamicInterval(() => setCount(count + 1), isCounting ? delay : null);

  return (
    <FlexRow style={{ position: 'relative' }}>
      <Input
        id="delay"
        label={t('delay')}
        value={delay}
        onChange={({ target: { value } }) => setDelay(+value)}
        style={{ textAlign: 'center', marginBottom: 15 }}
      />
      <Button onClick={() => setIsCounting(!isCounting)}>{isCounting ? t('pause') : t('play')}</Button>
      <StyledDynamicCounter>{count}</StyledDynamicCounter>
    </FlexRow>
  );
}

UseDynamicInterval.propTypes = {
  name: string
};

export default UseDynamicInterval;
