import { useRef, useEffect }  from 'react';

const addEvent = (fn, ref = document) => e => ref.addEventListener(e, fn);
const removeEvent = (fn, ref = document) => e => ref.removeEventListener(e, fn);

const defaultMouseMoveEvents = ['mousemove', 'touchmove'];
const defaultMouseDownEvents = ['mousedown', 'touchstart'];
const defaultMouseUpEvents = ['mouseup', 'touchend'];

const useDraggableEvent = (
  onDragged,
  mouseMoveEvents = defaultMouseMoveEvents,
  mouseDownEvents = defaultMouseDownEvents,
  mouseUpEvents = defaultMouseUpEvents
) => {
  const dragRef = useRef();

  useEffect(() => {
    let mouseOffsetX = 0;
    let mouseOffsetY = 0;

    const onRefDragged = e => onDragged({
      left: e.clientX - mouseOffsetX,
      top: e.clientY - mouseOffsetY
    });

    const onMouseUp = () => {
      mouseMoveEvents.forEach(removeEvent(onRefDragged));
      mouseUpEvents.forEach(removeEvent(onMouseUp));
    };

    const onMouseDown = ({ clientX, clientY }) => {
      // Save the click offset inside dragRef
      const { top, left } = dragRef.current.getBoundingClientRect();
      mouseOffsetX = clientX - left;
      mouseOffsetY = clientY - top;

      mouseMoveEvents.forEach(addEvent(onRefDragged));
      mouseUpEvents.forEach(addEvent(onMouseUp));
    };

    mouseDownEvents.forEach(addEvent(onMouseDown, dragRef.current));

    return () => {
      mouseDownEvents.forEach(removeEvent(onMouseDown, dragRef.current));
    };
  }, [onDragged, mouseMoveEvents, mouseDownEvents, mouseUpEvents]);

  return dragRef;
};

export default useDraggableEvent;
