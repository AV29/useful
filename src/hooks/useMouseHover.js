import { useEffect, useRef, useState } from 'react';
import { addEvent, removeEvent } from '../utilities/events';

export const useMouseHover = (defaultHovering = false) => {
  const [isHovering, setIsHovering] = useState(defaultHovering);
  const ref = useRef();

  useEffect(() => {
    const target = ref.current;
    const setNotHovering = () => setIsHovering(false);
    const setHovering = () => setIsHovering(true);

    addEvent(setHovering, target)('mouseenter');
    addEvent(setNotHovering, target)('mouseleave');

    return () => {
      removeEvent(setHovering, target)('mouseenter');
      removeEvent(setNotHovering, target)('mouseleave');
    };
  });

  return [ref, isHovering];
};

