import React from 'react';
import { func, bool, string } from 'prop-types';
import styles from './Playground.less';

function Input (props) {

  return (
    <input
      name={props.name}
      ref={props.inputRef}
      disabled={props.isDisabled}
      className={props.isDisabled ? styles.isDisabled : ''}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

Input.propTypes = {
  onChange: func.isRequired,
  isDisabled: bool,
  name: string,
  inputRef: func,
  value: string.isRequired
};

Input.defaultProps = {
  isDisabled: false,
  onChange: () => undefined
};

export default Input;
