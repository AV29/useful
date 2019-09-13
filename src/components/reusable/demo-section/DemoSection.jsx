import { node, string, func } from 'prop-types';
import React from 'react';
import { PaddedSmallHeading, StyledDemoSection } from '../../../styles/styles';

export const DemoSection = props => (
  <StyledDemoSection ref={props.sectionRef}>
    {
      props.title &&
      <PaddedSmallHeading bottom={10}>
        {props.title}
      </PaddedSmallHeading>
    }
    {props.children}
  </StyledDemoSection>
);

DemoSection.propTypes = {
  title: string,
  sectionRef: func,
  children: node
};

export default DemoSection;
