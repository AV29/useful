import { useEffect, useState, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  isLoading: false,
  error: '',
  data: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'REQUEST_DATA': {
      return { ...state, isLoading: true, error: '' };
    }

    case 'REQUEST_SUCCESS': {
      return { ...state, isLoading: false, data: action.data };
    }

    case 'REQUEST_FAILURE': {
      return { ...state, isLoading: false, error: action.error };
    }

    default: {
      return state;
    }
  }
};

const useDataFetch = (initialUrl) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    let isCancelled = false;
    dispatch({ type: 'REQUEST_DATA' });
    axios(url)
      .then(({ data: { hits } }) => {
        if (!isCancelled) {
          dispatch({ type: 'REQUEST_SUCCESS', data: hits });
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          dispatch({ type: 'REQUEST_FAILURE', error: err.message });
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [url]);

  return [state, setUrl];
};

export default useDataFetch;
