import React from 'react';
import { useTranslation } from 'react-i18next';
import { func, bool } from 'prop-types';
import { IdleIndicatorContainer } from './styles';
import IdleIndicator from '../../reusable/idle-indicator/IdleIndicator';
import Button from '../../reusable/controls/button/Button';
import Timer from '../../reusable/timer/Timer';
import { DemoSection } from '../../../styles/styles';

export default function IdleIndicatorDemo ({ onFinished, idle, onStartIdle, bindIndicator, bindTimer }) {
  const { t } = useTranslation('common');
  return (
    <DemoSection>
      <IdleIndicatorContainer>
        <IdleIndicator
          ref={bindIndicator}
          idleTime={2000}
          onFinished={onFinished}
        />
      </IdleIndicatorContainer>
      <Button disabled={idle} onClick={onStartIdle}>
        {idle ? t('waiting') : t('startIdleTimer')}
      </Button>
      <Timer ref={bindTimer}/>
    </DemoSection>
  );
}

IdleIndicatorDemo.propTypes = {
  idle: bool,
  onFinished: func,
  onStartIdle: func,
  bindIndicator: func,
  bindTimer: func
};