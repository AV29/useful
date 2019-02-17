import React from 'react';
import PropTypes from 'prop-types';
import { FlexRowCenter } from '../../../styles/styles';

function About(props) {
  return (
    <FlexRowCenter><h1>{props.name}</h1></FlexRowCenter>
  );
}

About.propTypes = {
  name: PropTypes.string
};

export default About;
