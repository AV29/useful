import React from 'react';
import { HorizontalContainer } from '../../../styles/styles';

function About(props) {
  return (
    <HorizontalContainer><h1>{props.name}</h1></HorizontalContainer>
  );
}

export default About;
