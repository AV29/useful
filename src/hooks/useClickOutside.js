import { useRef, useEffect } from 'react';
import { addEvent, removeEvent, noop } from '../utilities/events';

const defaultClickEvents = ['mousedown', 'touchstart'];

const useClickOutside = ({ initialState = false, clickEvents = defaultClickEvents, onClickOutside = noop, onClickInside = noop }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = ({ clientX, clientY }) => {
      if (!ref.current) return;

      const { left, top, right, bottom } = ref.current.getBoundingClientRect();
      const clickWasOutside = clientX > right || clientX < left || clientY > bottom || clientY < top;

      clickWasOutside ? onClickOutside() : onClickInside();
    };

    clickEvents.forEach(addEvent(handleClick));

    return () => {
      clickEvents.forEach(removeEvent(handleClick));
    };
  }, [onClickInside, onClickOutside, clickEvents]);

  return ref;
};

export default useClickOutside;
