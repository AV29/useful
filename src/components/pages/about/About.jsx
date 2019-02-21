import React from 'react';
import PropTypes from 'prop-types';
import { FlexRow } from '../../../styles/styles';

function About(props) {
  return (
    <FlexRow><h1>{props.name}</h1></FlexRow>
  );
}

About.propTypes = {
  name: PropTypes.string
};

export default About;
