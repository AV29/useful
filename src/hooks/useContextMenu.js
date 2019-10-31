import { useEffect, useRef, useState } from 'react';
import { addEvent, removeEvent } from '../utilities/events';

const useContextMenu = (initialCoords = null) => {
  const ref = useRef(null);
  const [coordinates, setCoordinates] = useState(initialCoords);

  useEffect(() => {
    const target = ref.current;
    const handleOpenContextMenu = (event) => {
      event.preventDefault();
      setCoordinates({ left: event.clientX, top: event.clientY });
    };

    addEvent(handleOpenContextMenu, target)('contextmenu');

    return () => {
      removeEvent(handleOpenContextMenu, target)('contextmenu');
    };
  });

  return [ref, coordinates, () => setCoordinates(null)];
};

export default useContextMenu;
