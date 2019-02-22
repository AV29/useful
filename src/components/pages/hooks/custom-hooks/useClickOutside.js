import { useState, useRef, useEffect } from 'react';
import { addEvent, removeEvent, noop } from '../../../../utilities/events';

const useClickOutside = (options) => {
  const {
    onClickOutside = noop,
    initialState   = false,
    clickEvents    = ['mousedown', 'touchstart']
  } = options || {};
  const [lastClickedOutside, setLastClickedOutside] = useState(initialState);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = ({ clientX, clientY }) => {
      if ( !ref.current ) return;

      console.log('Clicked');
      const { left, top, right, bottom } = ref.current.getBoundingClientRect();
      const clickWasOutside = clientX > right || clientX < left || clientY > bottom || clientY < top;

      clickWasOutside && onClickOutside();

      if (lastClickedOutside !== clickWasOutside) {
        return setLastClickedOutside(clickWasOutside);
      }
    };

    clickEvents.forEach(addEvent(handleClick));

    return () => {
      clickEvents.forEach(removeEvent(handleClick));
    };
  });

  return ref;
};

export default useClickOutside;
