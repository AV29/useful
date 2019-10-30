import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { func, string } from 'prop-types';
import ClickOutside from '../../reusable/clickoutside/ClickOutside';
import { MessagesContainer } from './styles';
import DemoSection from '../../reusable/demo-section/DemoSection';
import Button from '../../reusable/controls/button/Button';

export default function ClickOutsideDemo () {
  const { t } = useTranslation('common');
  const [messages, updateMessages] = useState([]);
  return (
    <ClickOutside
      onClickedOutside={() => updateMessages(messages => [...messages, 'out'])}
      onClickedInside={() => updateMessages(messages => [...messages, 'in'])}
    >
      {({ bindRef }) => (
        <DemoSection sectionRef={bindRef} title={t('clickOutsideExampleBlock')}>
          <Button onClick={() => updateMessages([])}>
            {t('resetMessages')}
          </Button>
          <MessagesContainer>
            {messages.map((message, index) => <div key={index}>{message}</div>)}
          </MessagesContainer>
        </DemoSection>
      )}
    </ClickOutside>
  );
}

ClickOutsideDemo.propTypes = {
  bindRef: func,
  color: string
};
