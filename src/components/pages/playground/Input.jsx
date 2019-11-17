import React from 'react';
import PropTypes from 'prop-types';
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
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  inputRef: PropTypes.func,
  value: PropTypes.string.isRequired
};

Input.defaultProps = {
  isDisabled: false,
  onChange: () => undefined
};

export default Input;
