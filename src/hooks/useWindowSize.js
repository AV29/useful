import { useEffect, useState } from 'react';

const useWindowSize = (initialDimensions = { height: window.innerHeight, width: window.innerWidth }) => {

  const [dimensions, setDimensions] = useState({ height: initialDimensions.height, width: initialDimensions.width });

  const handleResize = () => {
    setDimensions({ height: window.innerHeight, width: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dimensions;
};

export default useWindowSize;
