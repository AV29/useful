/*eslint-disable no-console*/
import React, { Component } from 'react';
import { DemoSection, SmallHeading } from '../../../styles/styles';
import LifeCyclePerformer from './LifeCyclePerformer';
import Button from '../../reusable/button/Button';

class Lifecycle extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleCallLifeCycleMethod = this.handleCallLifeCycleMethod.bind(this);
    this.handleTogglePerformerMount = this.handleTogglePerformerMount.bind(this);

    this.state = { isPerformerMounted: true };
  }

  handleCallLifeCycleMethod(message, params = {}) {
    console.groupCollapsed(message);
    Object.keys(params).forEach((paramKey) => {
      console.log(`${paramKey}:`, params[paramKey]);

    });
    console.groupEnd();
  }

  handleTogglePerformerMount() {
    this.setState(({ isPerformerMounted }) => ({ isPerformerMounted: !isPerformerMounted }));
  }

  render() {
    return (
      <DemoSection>
        {
          this.state.isPerformerMounted &&
          <LifeCyclePerformer onLifeCycleMethodCall={this.handleCallLifeCycleMethod}/>
        }
        <Button onClick={this.handleTogglePerformerMount}>
          {this.state.isPerformerMounted ? 'Unmount' : 'Mount'}
        </Button>
        <SmallHeading>* open console to see logs</SmallHeading>
      </DemoSection>
    );
  }
}

Lifecycle.propTypes = {};

export default Lifecycle;
