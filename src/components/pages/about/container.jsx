import React, { Fragment } from 'react';
import { string, shape, func } from 'prop-types';
import { FlexRow, FlexColumn, Heading, SmallHeading, PaddedBlock, List } from '../../../styles/styles';

const items = [{ id: 1, text: 'Different Controls', path: '/controls' }];

function About(props) {
  return (
    <Fragment>
      <FlexRow><Heading>{props.name}</Heading></FlexRow>
      <FlexColumn align="center">
        <SmallHeading> This is an application that serves two main goals: </SmallHeading>
        <SmallHeading>
          1) to demonstration various React development patterns and approaches as well as the JavaScript general ones.
        </SmallHeading>
        <SmallHeading>
          2) to preserve and hold various techniques and controls for future reuse.
        </SmallHeading>
        <PaddedBlock top={50}>
          <SmallHeading>It contains several main sections:</SmallHeading>
          <List>
            {
              items.map(({ text, path, id }) => (
                <li
                  key={id}
                  onClick={() => props.history.push(path)}
                >
                  {text}
                </li>
              ))
            }
          </List>
        </PaddedBlock>
      </FlexColumn>
    </Fragment>
  );
}

About.propTypes = {
  name: string,
  history: shape({
    push: func
  })
};

export default About;
