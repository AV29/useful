import { useEffect, useState } from 'react';

export default function (start = Date.now()) {
  const [milliseconds, setMilliseconds] = useState(start);
  useInterval(() => setMilliseconds(milliseconds + 1000), 1000);
  return Date(milliseconds);
}

export function useInterval (callback, delay) {
  useEffect(() => {
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  });
}

export function useTimer (precision = 5) {
  const [time, setTime] = useState(0);
  useInterval(() => setTime(time + precision), precision);
  return time;
}
