import React, { Component, Fragment } from 'react';
import { string } from 'prop-types';
import AsyncLoss from './AsyncLoss';
import { DemoSection, GridWrapper, Heading, SmallHeading } from '../../../styles/styles';

class This extends Component {

  render() {
    return (
      <Fragment>
        <Heading>{this.props.name}</Heading>
        <GridWrapper>
          <DemoSection>
            <SmallHeading>Example 1</SmallHeading>
            <AsyncLoss/>
          </DemoSection>
        </GridWrapper>
      </Fragment>
    );
  }
}

This.propTypes = {
  name: string
};

export default This;
