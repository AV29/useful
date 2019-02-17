import { useState } from 'react';

function useFormValue(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange({ target: { value } }) {
    setValue(value);
  }

  return { value, onChange: handleChange };
}

export default useFormValue;
