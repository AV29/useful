import { useEffect, useRef, useState } from 'react';

const useComponentMountVisibilityDelay = (timeoutMs = 300, defaultVisible = false) => {
  const [isVisible, setVisible] = useState(defaultVisible);

  // useEffect runs given the function after componentDidMount,
  // and when the second array argument members change
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(!defaultVisible);
    }, timeoutMs);

    // Return a function to clean up the timeout on componentWillUnmount
    return () => {
      clearTimeout(timeout);
    };
  }, [timeoutMs, defaultVisible]);

  return isVisible;
};

const useMouseHoverState = (defaultHovering = false) => {
  const [isHovering, setIsHovering] = useState(defaultHovering);
  const ref = useRef();

  const addEvent = (e, fn) => ref.current.addEventListener(e, fn);
  const removeEvent = (e, fn) => ref.current.removeEventListener(e, fn);

  useEffect(() => {
    const setHovering = () => setIsHovering(true);
    const setNotHovering = () => setIsHovering(false);

    addEvent('mouseenter', setHovering);
    addEvent('mouseleave', setNotHovering);

    return () => {
      removeEvent('mouseenter', setHovering);
      removeEvent('mouseleave', setNotHovering);
    };
  }, [defaultHovering]);

  return [ref, isHovering];
};
