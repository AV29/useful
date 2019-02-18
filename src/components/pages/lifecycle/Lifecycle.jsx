import React, { useState, Fragment } from 'react';
import { string } from 'prop-types';
import { DemoSection, SmallHeading, FlexRowCenter, Heading, FlexColumnCenter } from '../../../styles/styles';
import Parent from './Parent';
import Button from '../../reusable/controls/button/Button';

function Lifecycle ({ name }) {
  const [preventLogs, setPreventLogs] = useState(false);
  return (
    <Fragment>
      <Heading>{name}</Heading>
      <DemoSection>
        <FlexColumnCenter>
          <Parent preventLogs={preventLogs}/>
          <FlexRowCenter>
            <SmallHeading>* open console to see logs</SmallHeading>
            <Button onClick={() => setPreventLogs(!preventLogs)}>
              {preventLogs ? 'Turn ON Parent Logs' : 'Turn OFF Parent Logs'}
            </Button>
          </FlexRowCenter>
        </FlexColumnCenter>
      </DemoSection>
    </Fragment>
  );
}

Lifecycle.propTypes = {
  name: string
};

export default Lifecycle;
