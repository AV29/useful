import { useEffect, useRef, useState } from 'react';
import { addEvent, removeEvent } from '../utilities/events';

export const useMouseHover = (defaultHovering = false) => {
  const [isHovering, setIsHovering] = useState(defaultHovering);
  const ref = useRef();

  useEffect(() => {
    const setNotHovering = () => setIsHovering(false);
    const setHovering = () => setIsHovering(true);

    addEvent(setHovering, ref.current)('mouseenter');
    addEvent(setNotHovering, ref.current)('mouseleave');

    return () => {
      removeEvent(setHovering, ref.current)('mouseenter');
      removeEvent(setNotHovering, ref.current)('mouseleave');
    };
  });

  return [ref, isHovering];
};

