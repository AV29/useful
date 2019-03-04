import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { string, func } from 'prop-types';
import AsyncLoss from './AsyncLoss';
import { DemoSection, GridWrapper, Heading, SmallHeading } from '../../../styles/styles';

function This (props) {
  const { t } = useTranslation('common');
  return (
    <Fragment>
      <Heading>{t(props.nameKey)}</Heading>
      <GridWrapper>
        <DemoSection>
          <SmallHeading>{`${t('example')} 1`}</SmallHeading>
          <AsyncLoss/>
        </DemoSection>
      </GridWrapper>
    </Fragment>
  );
}

This.propTypes = {
  nameKey: string,
  t: func
};

export default This;
