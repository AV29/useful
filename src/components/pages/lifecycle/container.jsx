import React, { useState, Fragment } from 'react';
import { string } from 'prop-types';
import { DemoSection, SmallHeading, FlexRow, Heading, FlexColumn } from '../../../styles/styles';
import Parent from './Parent';
import Button from '../../reusable/controls/button/Button';

function Lifecycle ({ name }) {
  const [preventLogs, setPreventLogs] = useState(false);
  return (
    <Fragment>
      <Heading>{name}</Heading>
      <DemoSection>
        <FlexColumn>
          <Parent preventLogs={preventLogs}/>
          <FlexRow>
            <SmallHeading>* open console to see logs</SmallHeading>
            <Button onClick={() => setPreventLogs(!preventLogs)}>
              {preventLogs ? 'Turn ON Parent Logs' : 'Turn OFF Parent Logs'}
            </Button>
          </FlexRow>
        </FlexColumn>
      </DemoSection>
    </Fragment>
  );
}

Lifecycle.propTypes = {
  name: string
};

export default Lifecycle;
