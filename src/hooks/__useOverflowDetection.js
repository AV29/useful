import { useState, useLayoutEffect, useRef } from 'react';

const useOverflowEffect = () => {
  const ref = useRef();
  const [isOverflowingX, setOverflowingX] = useState(false);
  const [isOverflowingY, setOverflowingY] = useState(false);

  const detectOverflow = () => {
    const {
      scrollHeight,
      scrollWidth,
      clientHeight,
      clientWidth
    } = ref.current;

    const overflowingX = scrollWidth > clientWidth;
    const overflowingY = scrollHeight > clientHeight;

    overflowingX !== isOverflowingX && setOverflowingX(overflowingX);
    overflowingY !== isOverflowingY && setOverflowingY(overflowingY);
  };

  useLayoutEffect(detectOverflow);

  useLayoutEffect(() => {
    const rafID = requestAnimationFrame(detectOverflow);
    return () => {
      cancelAnimationFrame(rafID);
    };
  });

  return [ref, isOverflowingX, isOverflowingY];
};

export default useOverflowEffect;
