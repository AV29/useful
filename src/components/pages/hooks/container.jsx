import React, { Fragment } from 'react';
import { string } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { DemoSectionTitled, Heading, GridWrapper } from '../../../styles/styles';
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
        <DemoSectionTitled title="useDataFetch">
          <UseDataFetch />
        </DemoSectionTitled>
        <DemoSectionTitled title="useFormValue">
          <UseFormValue />
        </DemoSectionTitled>
        <DemoSectionTitled title="useDateTimer">
          <UseDateTimer />
        </DemoSectionTitled>
        <DemoSectionTitled title="useContextMenu">
          <UseContextMenu />
        </DemoSectionTitled>
        <DemoSectionTitled title="useMouseHover">
          <UseMouseHover />
        </DemoSectionTitled>
        <DemoSectionTitled title="useDynamicInterval">
          <UseDynamicInterval />
        </DemoSectionTitled>
      </GridWrapper>
    </Fragment>
  );
}

Hooks.propTypes = {
  nameKey: string
};

export default Hooks;
