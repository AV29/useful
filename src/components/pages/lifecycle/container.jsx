import React, { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { string } from 'prop-types';
import { DemoSection, SmallHeading, FlexRow, Heading, FlexColumn } from '../../../styles/styles';
import Parent from './Parent';
import Button from '../../reusable/controls/button/Button';

function Lifecycle (props) {
  const [preventLogs, setPreventLogs] = useState(false);
  const { t } = useTranslation('common');
  return (
    <Fragment>
      <Heading>{t(props.nameKey)}</Heading>
      <DemoSection>
        <FlexColumn>
          <Parent preventLogs={preventLogs}/>
          <FlexRow>
            <SmallHeading>{t('openConsole')}</SmallHeading>
            <Button onClick={() => setPreventLogs(!preventLogs)}>
              {preventLogs ? t('turnOnParentLogs') : t('turnOffParentLogs')}
            </Button>
          </FlexRow>
        </FlexColumn>
      </DemoSection>
    </Fragment>
  );
}

Lifecycle.propTypes = {
  nameKey: string
};

export default Lifecycle;
