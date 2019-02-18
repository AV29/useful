/*eslint-disable no-console*/
import React, { Component, Fragment } from 'react';
import { bool } from 'prop-types';
import { Section, SmallHeading } from '../../../styles/styles';
import Child from './Child';
import Button from '../../reusable/button/Button';

function log (message, params, color, preventLog = false) {
  if (preventLog) return;
  console.groupCollapsed(`${message}`, `color: ${color}`);
  Object.keys(params).forEach((paramKey) => {
    console.log(`${paramKey}:`, params[paramKey]);

  });
  console.groupEnd();
}


function logChild (message, params, preventLogs) {
  log(`${message} %c( Child )`, params, '#ca9f36', preventLogs);
}

function logParent (message, params, preventLogs) {
  log(`${message} %c( Parent )`, params, '#288dc8', preventLogs);
}

class Parent extends Component {

  static getDerivedStateFromProps (props, state) {
    logParent('Get Derived State From Props', { props, state }, props.preventLogs);
    return null;
  }

  constructor (props, context) {
    super(props, context);

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggleChildMount = this.handleToggleChildMount.bind(this);
    this.handleToggleChildUpdatebility = this.handleToggleChildUpdatebility.bind(this);

    this.state = {
      isChildMounted: true,
      shouldChildUpdate: true,
      counter: 0
    };

    logParent('Constructor', { props: this.props, state: this.state }, this.props.preventLogs);
  }

  componentDidMount () {
    logParent('Component Did Mount', { props: this.props, state: this.state }, this.props.preventLogs);
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    logParent('Should Component Update', {
      nextProps,
      nextState,
      nextContext,
      props: this.props,
      state: this.state
    }, this.props.preventLogs);
    return true;
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    logParent('Get Snapshot Before Update', {
      prevProps,
      prevState,
      props: this.props,
      state: this.state
    }, this.props.preventLogs);
    return {
      windowHeight: window.innerHeight
    };
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    logParent('Component Did Update', {
      prevProps,
      prevState,
      snapshot,
      props: this.props,
      state: this.state
    }, this.props.preventLogs);
  }

  componentWillUnmount () {
    logParent('Component Will Unmount', { props: this.props, state: this.state }, this.props.preventLogs);
  }

  handleToggleChildMount () {
    this.setState(({ isChildMounted }) => ({ isChildMounted: !isChildMounted }));
  }

  handleToggleChildUpdatebility () {
    this.setState(({ shouldChildUpdate }) => ({ shouldChildUpdate: !shouldChildUpdate }));
  }

  handleUpdate () {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  }

  render () {
    logParent('Render', { props: this.props, state: this.state }, this.props.preventLogs);
    return (
      <Fragment>
        <Section>
          <SmallHeading>Parent</SmallHeading>
          <Button onClick={this.handleUpdate}>
            I'm Parent! Update ME...{this.state.counter}
          </Button>
          <Button onClick={this.handleToggleChildUpdatebility}>
            {this.state.shouldChildUpdate ? 'Prevent child from updating' : 'Make child able to update'}
          </Button>
          <Button onClick={this.handleToggleChildMount}>
            {this.state.isChildMounted ? 'Unmount Child' : 'Mount Child'}
          </Button>
          {
            this.state.isChildMounted &&
            <Child
              onLifeCycleMethodCall={logChild}
              shouldUpdate={this.state.shouldChildUpdate}
            />
          }
        </Section>
      </Fragment>
    );
  }
}

Parent.propTypes = {
  preventLogs: bool
};

export default Parent;
