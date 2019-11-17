import React, { Fragment, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IdleIndicatorContainer } from './styles';
import IdleIndicator from '../../reusable/idle-indicator/IdleIndicator';
import Button from '../../reusable/controls/button/Button';
import Timer from '../../reusable/timer/Timer';

export default function IdleIndicatorDemo () {
  const { t } = useTranslation('common');
  const [isInIdle, toggleInIdle] = useState(false);
  const idleIndicator = useRef(null);
  const timer = useRef(null);
  return (
    <Fragment>
      <IdleIndicatorContainer>
        <IdleIndicator
          ref={idleIndicator}
          idleTime={2000}
          onFinished={() => {
            toggleInIdle(false);
            timer.current.stop();
          }}
        />
      </IdleIndicatorContainer>
      <Button
        disabled={isInIdle}
        onClick={() => {
          toggleInIdle(true);
          idleIndicator.current.trigger();
          timer.current.trigger();
        }}
      >
        {isInIdle ? t('waiting') : t('startIdleTimer')}
      </Button>
      <Timer ref={timer} />
    </Fragment>
  );
}
