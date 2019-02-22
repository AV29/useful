import React from 'react';
import useClickOutside from './custom-hooks/useClickOutside';
import { SmallHeading, DemoSection } from '../../../styles/styles';
import PropTypes from 'prop-types';

function DynamicTimer () {
  const ref = useClickOutside({ onClickOutside: () => undefined, onClickInside: () => undefined });
  return (
    <DemoSection>
      <SmallHeading ref={ref}>Right Click Here to call context menu</SmallHeading>
    </DemoSection>
  );
}

DynamicTimer.propTypes = {
  name: PropTypes.string
};

export default DynamicTimer;
