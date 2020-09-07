import { useRef } from 'react';

const useWhyDidYouUpdate = (props) => {
  const savedProps = useRef(props);

  const culprits = {};

  Object.keys(props).forEach((key) => {
    if(props[key] !== savedProps.current[key]) {
      culprits[key] = props[key];
    }
  });

  savedProps.current = props;

  return culprits;
};

export default useWhyDidYouUpdate;
