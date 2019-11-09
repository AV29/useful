export const getPositionInfo = el =>
  (el && el.getBoundingClientRect && el.getBoundingClientRect()) ||
  { top: 0, left: 0 };

const getTopWithWindow = (targetTop, tooltipFullHeight) =>
  window.innerHeight >= targetTop + tooltipFullHeight ?
    targetTop :
    window.innerHeight - tooltipFullHeight;

const getTooltipPosition = (targetRef, tooltipRef, offset = 10) => {
  const target = getPositionInfo(targetRef);
  const tooltip = getPositionInfo(tooltipRef);

  const tooltipFullHeight = tooltip.height + offset;
  const tooltipFullWidth = tooltip.width + offset;

  const fitsRight = window.innerWidth - target.right > tooltipFullWidth;
  const fitsLeft = target.left > tooltipFullWidth;
  const fitsBottom = window.innerHeight - target.bottom > tooltipFullHeight;
  const fitsTop = target.top > tooltipFullHeight;

  if (fitsTop && fitsLeft && fitsRight) {
    return {
      top: target.top - tooltipFullHeight,
      left: (target.width / 2 + target.left) - tooltip.width / 2,
      orientation: 'top'
    };
  }

  if (fitsRight) {
    return {
      top: getTopWithWindow(target.top, tooltipFullHeight),
      left: target.right + offset,
      orientation: 'right'
    };
  }

  if (fitsBottom && fitsRight) {
    return {
      left: target.left + offset,
      top: target.bottom + offset,
      orientation: 'bottom'
    };
  }

  return {
    top: getTopWithWindow(target.top, tooltipFullHeight),
    left: target.left - tooltipFullWidth,
    orientation: 'left'
  };
};

export default getTooltipPosition;
