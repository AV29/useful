import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { DemoSection, FlexRowWrapped, Heading } from '../../../styles/styles';
import TestResizebleContainer from '../hoc/TestResizebleContainer';

class Hoc extends Component {

  render () {
    return (
      <Fragment>
        <Heading>{this.props.name}</Heading>
        <FlexRowWrapped>
          <DemoSection>
            <TestResizebleContainer heading="Try resizing me" initialWidth={240}/>
          </DemoSection>
        </FlexRowWrapped>
      </Fragment>
    );
  }
}

Hoc.propTypes = {
  name: PropTypes.string
};

export default Hoc;