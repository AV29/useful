import React from 'react';
import PropTypes from 'prop-types';
import { HorizontalContainer } from '../../../styles/styles';

function About(props) {
  return (
    <HorizontalContainer><h1>{props.name}</h1></HorizontalContainer>
  );
}

About.propTypes = {
  name: PropTypes.string
};

export default About;
