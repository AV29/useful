import { useState, useRef, useEffect } from 'react';
import { addEvent, removeEvent } from '../../../../utilities/events';

const defaultClickEvents = ['mousedown', 'touchstart'];

const useClickOutside = (initialState = false, clickEvents = defaultClickEvents) => {
  const [lastClickedOutside, setLastClickedOutside] = useState(initialState);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = ({ clientX, clientY }) => {

      console.log('Clicked');
      const { left, top, right, bottom } = ref.current.getBoundingClientRect();
      const clickWasOutside = clientX > right || clientX < left || clientY > bottom || clientY < top;

      if (lastClickedOutside !== clickWasOutside) {
        return setLastClickedOutside(clickWasOutside);
      }
    };

    clickEvents.forEach(addEvent(handleClick));

    return () => {
      clickEvents.forEach(removeEvent(handleClick));
    };
  });

  return [ref, lastClickedOutside];
};

export default useClickOutside;
