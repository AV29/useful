import React from 'react';
import { HorizontalContainer } from '../../../styles/styles';
import PropTypes from 'prop-types';

function Hooks(props) {
  return (
    <HorizontalContainer>
      <h1>{props.name}</h1>
    </HorizontalContainer>
  );
}

Hooks.propTypes = {
  name: PropTypes.string
};

export default Hooks;
