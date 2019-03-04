import React from 'react';
import { string } from 'prop-types';
import { SmallHeading } from '../../../styles/styles';
import { StyledTestResizerWrapper } from './styles';
import withResizing from '../../reusable/resizer/withResizing';

function TestResizableContainer ({ heading }) {
  return (
    <StyledTestResizerWrapper>
      <SmallHeading>{heading}</SmallHeading>
    </StyledTestResizerWrapper>
  );
}

TestResizableContainer.propTypes = {
  heading: string
};

export default withResizing(TestResizableContainer);
