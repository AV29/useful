import React, { Component } from 'react';
import { func, bool } from 'prop-types';
import { SmallHeading } from '../../../styles/styles';
import { LifeCycleSection } from './styles';
import Button from '../../reusable/controls/button/Button';

class Child extends Component {

  static getDerivedStateFromProps (props, state) {
    props.onLifeCycleMethodCall('Get Derived State From Props', { props, state });
    return null;
  }

  constructor (props, context) {
    super(props, context);

    this.state = {
      counter: 0
    };

    this.handleUpdate = this.handleUpdate.bind(this);

    this.props.onLifeCycleMethodCall('Constructor', { props: this.props, state: this.state });
  }

  // UNSAFE_componentWillMount() {
  //   this.lifeCycleCall('Component Will Mount');
  // }

  componentDidMount () {
    this.props.onLifeCycleMethodCall('Component Did Mount', { props: this.props, state: this.state });
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    this.props.onLifeCycleMethodCall('Should Component Update', {
      nextProps,
      nextState,
      nextContext,
      props: this.props,
      state: this.state
    });
    return this.props.shouldUpdate;
  }

  // UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
  //   this.lifeCycleCall('Component Will Update');
  // }
  //
  // UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
  //   this.lifeCycleCall('Component Will Receive Props');
  // }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    this.props.onLifeCycleMethodCall('Get Snapshot Before Update', {
      prevProps,
      prevState,
      props: this.props,
      state: this.state
    });
    return {
      windowHeight: window.innerHeight
    };
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    this.props.onLifeCycleMethodCall('Component Did Update', {
      prevProps,
      prevState,
      snapshot,
      props: this.props,
      state: this.state
    });
  }

  componentWillUnmount () {
    this.props.onLifeCycleMethodCall('Component Will Unmount', { props: this.props, state: this.state });
  }

  handleUpdate () {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  }

  render () {
    this.props.onLifeCycleMethodCall('Render', { props: this.props, state: this.state });
    return (
      <LifeCycleSection>
        <SmallHeading>Child</SmallHeading>
        <Button onClick={this.handleUpdate}>
          Update Child...{this.state.counter}
        </Button>
      </LifeCycleSection>
    );
  }
}

Child.propTypes = {
  onLifeCycleMethodCall: func.isRequired,
  shouldUpdate: bool
};

export default Child;
