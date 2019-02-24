import { useEffect, useRef, useState } from 'react';
import { addEvent, removeEvent } from '../utilities/events';

const useContextMenu = (initialCoords = null) => {
  const ref = useRef(null);
  const [coordinates, setCoordinates] = useState(initialCoords);

  useEffect(() => {
    const handleOpenContextMenu = (event) => {
      event.preventDefault();
      setCoordinates({ left: event.clientX, top: event.clientY });
    };

    addEvent(handleOpenContextMenu, ref.current)('contextmenu');

    return () => {
      removeEvent(handleOpenContextMenu, ref.current)('contextmenu');
    };
  });

  return [ref, coordinates, () => setCoordinates(null)];
};

export default useContextMenu;
