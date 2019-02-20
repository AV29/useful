import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { DemoSection, FlexRowWrapped, Heading, SmallHeading } from '../../../styles/styles';

class This extends Component {

  render () {
    return (
      <Fragment>
        <Heading>{this.props.name}</Heading>
        <FlexRowWrapped>
          <DemoSection>
            <SmallHeading>Example 1</SmallHeading>
          </DemoSection>
        </FlexRowWrapped>
      </Fragment>
    );
  }
}

This.propTypes = {
  name: PropTypes.string
};

export default This;
