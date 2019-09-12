import React from 'react';
import { string, func, object } from 'prop-types';
import './components/dropdown.js';

const Dropdown = ({ label, option, options, onChange }) => {
  const ref = React.createRef();

  React.useLayoutEffect(() => {
    const handleChange = customEvent => onChange(customEvent.detail);
    const { current } = ref;
    current.addEventListener('onChange', handleChange);
    return () => current.removeEventListener('onChange', handleChange);
  }, [ref, onChange]);

  return (
    <anton-dropdown
      ref={ref}
      label={label}
      option={option}
      options={JSON.stringify(options)}
    />
  );
};

Dropdown.propTypes = {
  label: string,
  option: string,
  options: object,
  onChange: func
};

export default Dropdown;
