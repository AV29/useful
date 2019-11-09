import { useState } from 'react';

function useFormValue (initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange (data) {
    setValue(data.target ? data.target.value : data);
  }

  return { value, onChange: handleChange };
}

export default useFormValue;
