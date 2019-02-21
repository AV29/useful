import React, { useState, Component, Fragment } from 'react';
import { string, shape } from 'prop-types';
import Button from '../../reusable/controls/button/Button';
import { DemoSection, GridWrapper, Heading, SmallHeading } from '../../../styles/styles';

function AsyncLoss ({ name }) {
  const [user, setUser] = useState({ name: 'Anton' });
  return (
    <Fragment>
      <Heading>{name}</Heading>
      <GridWrapper>
        <DemoSection>
          <SmallHeading>Example 1</SmallHeading>
          <Button onClick={() => setUser({ name: 'John' })}>Change User from Above</Button>
          <Consumer user={user}/>
        </DemoSection>
      </GridWrapper>
    </Fragment>
  );
}

AsyncLoss.propTypes = {
  name: string
};

export default AsyncLoss;


class Consumer extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      name: this.props.user.name,
      inJob: false
    };
  }


  handleClick () {
    this.setState({ inJob: true });
    /** This is where we can preserve user even if it was changed during timer ticking */
    // const { user } = this.props;
    // setTimeout(() => this.setState({ name: user.name, inJob: false }), 3000);

    /** This would lead to change users info */
    setTimeout(() => this.setState({ name: this.props.user.name, inJob: false }), 3000);
  }

  render () {
    return (
      <Fragment>
        <SmallHeading>
          {this.state.name}
          <Button onClick={this.handleClick}>Start Async</Button>
          {this.state.inJob ? ' waiting...' : ' ok'}
        </SmallHeading>
      </Fragment>
    );
  }
}

Consumer.propTypes = {
  user: shape({
    name: string
  })
};


