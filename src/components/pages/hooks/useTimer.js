import { useEffect, useState } from 'react';

export default function (start = Date.now()) {
  const [milliseconds, setMilliseconds] = useState(start);
  useInterval(() => setMilliseconds(milliseconds + 1000), 1000);
  return Date(milliseconds);
}

function useInterval(callback, delay) {
  useEffect(() => {
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  });
}
