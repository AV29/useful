import React from 'react';
import { func, string } from 'prop-types';
import { SmallHeading } from '../../../styles/styles';
import { ClickOutsideDemoSection } from './styles';

export default function ClickOutsideDemo({ color, bindRef }) {
  return (
    <ClickOutsideDemoSection ref={bindRef} shadowColor={color}>
      <SmallHeading>Click outside this section to paint shadow randomly</SmallHeading>
      <SmallHeading>Click inside this section to paint it black! :)</SmallHeading>
    </ClickOutsideDemoSection>
  );
}

ClickOutsideDemo.propTypes = {
  bindRef: func,
  color: string
};
