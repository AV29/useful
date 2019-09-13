import React, { Fragment } from 'react';
import { string } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Heading, GridWrapper } from '../../../styles/styles';
import DemoSection from '../../reusable/demo-section/DemoSection';
import UseDateTimer from './UseDateTimer';
import UseFormValue from './UseFormValue';
import UseDataFetch from './UseDataFetch';
import UseMouseHover from './UseMouseHover';
import UseDynamicInterval from './UseDynamicInterval';
import UseContextMenu from './UseContextMenu';

function Hooks (props) {
  const { t } = useTranslation('common');
  return (
    <Fragment>
      <Heading>{t(props.nameKey)}</Heading>
      <GridWrapper>
        <DemoSection title="useDataFetch">
          <UseDataFetch />
        </DemoSection>
        <DemoSection title="useFormValue">
          <UseFormValue />
        </DemoSection>
        <DemoSection title="useDateTimer">
          <UseDateTimer />
        </DemoSection>
        <DemoSection title="useContextMenu">
          <UseContextMenu />
        </DemoSection>
        <DemoSection title="useMouseHover">
          <UseMouseHover />
        </DemoSection>
        <DemoSection title="useDynamicInterval">
          <UseDynamicInterval />
        </DemoSection>
      </GridWrapper>
    </Fragment>
  );
}

Hooks.propTypes = {
  nameKey: string
};

export default Hooks;
