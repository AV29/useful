import React, { Fragment } from 'react';
import { DemoSection, Heading, FlexRowWrapped } from '../../../styles/styles';
import PropTypes from 'prop-types';
import Clock from './Clock';
import DynamicTimer from './DynamicTimer';
import DataForm from './DataForm';

function Hooks(props) {
  return (
    <Fragment>
      <Heading>{props.name}</Heading>
      <FlexRowWrapped>
        <DemoSection>
          <DynamicTimer/>
        </DemoSection>
        <DemoSection>
          <DataForm/>
        </DemoSection>
        <DemoSection>
          <Clock/>
        </DemoSection>
      </FlexRowWrapped>
    </Fragment>
  );
}

Hooks.propTypes = {
  name: PropTypes.string
};

export default Hooks;
