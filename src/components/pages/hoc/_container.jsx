import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { string } from 'prop-types';
import { GridWrapper, Heading } from '../../../styles/styles';
import DemoSection from '../../reusable/demo-section/DemoSection';
import TestResizableContainer from '../hoc/TestResizableContainer';

function Hoc (props) {
  const { t } = useTranslation('common');
  return (
    <Fragment>
      <Heading>{t(props.nameKey)}</Heading>
      <GridWrapper>
        <DemoSection title="withResizing">
          <TestResizableContainer heading={t('tryResizing')} initialWidth={240}/>
        </DemoSection>
      </GridWrapper>
    </Fragment>
  );
}

Hoc.propTypes = {
  nameKey: string
};

export default Hoc;
