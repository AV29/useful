import React, { useState } from 'react';
import { shape, number, bool, string, object } from 'prop-types';
import useClickOutside from './custom-hooks/useClickOutside';
import { SmallHeading, DemoSection } from '../../../styles/styles';
import Portal from '../../reusable/portal/Portal';

function ClickOutside () {
  const [contextMenuCoordinates, setContextMenuCoordinates] = useState(null);

  const ref = useClickOutside({ onClickOutside: () => setContextMenuCoordinates(null) });

  return (
    <DemoSection>
      <SmallHeading
        onContextMenu={(event) => {
          event.preventDefault();
          setContextMenuCoordinates({ left: event.clientX, top: event.clientY });
        }}
      >
        Right Click Here to call context menu
      </SmallHeading>
      <ContextMenu
        refProp={ref}
        coords={contextMenuCoordinates}
      />
    </DemoSection>
  );
}

function ContextMenu ({ refProp, isShown, coords }) {
  if (coords) {
    const { top, left } = coords;
    return (
      <Portal>
        <div
          ref={refProp}
          style={{ top, left, width: 100, height: 100, backgroundColor: 'tomato', position: 'absolute' }}
        />
      </Portal>
    );
  } else {
    return null;
  }
}

ContextMenu.propTypes = {
  isShown: bool,
  passedRef: object,
  coords: shape({
    x: number,
    y: number
  }),
};

ClickOutside.propTypes = {
  name: string
};

export default ClickOutside;
