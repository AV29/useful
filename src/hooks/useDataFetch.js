import { useEffect, useState } from 'react';
import axios from 'axios';

const useDataFetch = (initialUrl) => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setError('');
    axios(url)
      .then(({ data: { hits } }) => {
        setData(hits);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, goGetIT: setUrl, error };
};

export default useDataFetch;
