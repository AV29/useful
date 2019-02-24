import { useEffect, useState } from 'react';

export const useComponentMountVisibilityDelay = (timeoutMs = 300, defaultVisible = false) => {
  const [isVisible, setVisible] = useState(defaultVisible);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(!defaultVisible);
    }, timeoutMs);

    return () => {
      clearTimeout(timeout);
    };
  }, [timeoutMs, defaultVisible]);

  return isVisible;
};
