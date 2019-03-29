import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { string, func } from 'prop-types';
import AsyncLoss from './AsyncLoss';
import SetStateNature from './SetStateNature';
import { GridWrapper, Heading } from '../../../styles/styles';

function This (props) {
  const { t } = useTranslation('common');
  return (
    <Fragment>
      <Heading>{t(props.nameKey)}</Heading>
      <GridWrapper>
        <AsyncLoss/>
        <SetStateNature/>
      </GridWrapper>
    </Fragment>
  );
}

This.propTypes = {
  nameKey: string,
  t: func
};

export default This;
