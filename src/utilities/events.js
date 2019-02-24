export const addEvent = (handler, target = document) => event => target.addEventListener(event, handler);
export const removeEvent = (handler, target = document) => event => target.removeEventListener(event, handler);
export const noop = () => undefined;
