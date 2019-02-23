import React, { Fragment, useState } from 'react';
import { shape, number, bool, string, object } from 'prop-types';
import useClickOutside from './custom-hooks/useClickOutside';
import { SmallHeading, DemoSection } from '../../../styles/styles';
import Portal from '../../reusable/portal/Portal';

function ClickOutside () {

  return (
    <DemoSection>
      <MenuX
        target={<SmallHeading>Right Click Here to call context menu</SmallHeading>}
      >
        <div
          style={{ width: 100, height: 100, backgroundColor: 'tomato' }}
        />
      </MenuX>
    </DemoSection>
  );
}

function MenuX ({ children, target }) {
  const [contextMenuCoordinates, setContextMenuCoordinates] = useState(null);

  return (
    <Fragment>
      <div
        onContextMenu={(event) => {
          event.preventDefault();
          setContextMenuCoordinates({ left: event.clientX, top: event.clientY });
        }}
      >
        {target}
      </div>
      <ContextMenu
        onClickOutside={() => setContextMenuCoordinates(null)}
        coords={contextMenuCoordinates}
      >
        {children}
      </ContextMenu>
    </Fragment>
  );
}

function ContextMenu ({ children, refProp, isShown, coords, onClickOutside }) {
  if (coords) {
    return (
      <Portal>
        <div ref={useClickOutside({ onClickOutside })} style={{ ...coords, position: 'absolute' }}>
          {children}
        </div>
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
