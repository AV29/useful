import { useEffect, useRef, useState } from 'react';
import getTooltipPosition from '../utilities/getTooltipPosition';
import { useComponentMountVisibilityDelay } from './useComponentMountVisibilityDelay';

export const useTooltipPosition = (targetRef, delay = 200) => {
  const [position, setPosition] = useState({});
  const isVisible = useComponentMountVisibilityDelay(delay);
  const tooltipRef = useRef(null);
  useEffect(() => {
    setPosition(getTooltipPosition(targetRef.current, tooltipRef.current));
  }, [targetRef]);

  return [tooltipRef, position, isVisible];
};
