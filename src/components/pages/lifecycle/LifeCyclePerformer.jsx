import React, { Component } from 'react';
import { func } from 'prop-types';
import Button from '../../reusable/button/Button';

class LifeCyclePerformer extends Component {

  static getDerivedStateFromProps(props, state) {
    props.onLifeCycleMethodCalled('Get Derived State From Props', { props, state });
    return {};
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      counter: 0
    };

    this.handleUpdate = this.handleUpdate.bind(this);

    this.props.onLifeCycleMethodCalled('Constructor', { props: this.props, state: this.state });
  }

  // UNSAFE_componentWillMount() {
  //   this.lifeCycleCall('Component Will Mount');
  // }

  componentDidMount() {
    this.props.onLifeCycleMethodCalled('Component Did Mount', { props: this.props, state: this.state });
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    this.props.onLifeCycleMethodCalled('Should Component Update', { nextProps, nextState, nextContext });
    return true;
  }

  // UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
  //   this.lifeCycleCall('Component Will Update');
  // }
  //
  // UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
  //   this.lifeCycleCall('Component Will Receive Props');
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    this.props.onLifeCycleMethodCalled('Get Snapshot Before Update', { props: prevProps, state: prevState });
    return {
      windowHeight: window.innerHeight
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.props.onLifeCycleMethodCalled('Component Did Update', { prevProps, prevState, snapshot });
  }

  componentWillUnmount() {
    this.props.onLifeCycleMethodCalled('Component Will Unmount', { props: this.props, state: this.state });
  }

  handleUpdate() {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  }

  render() {
    this.props.onLifeCycleMethodCalled('Render');
    return <Button onClick={this.handleUpdate}>Update Me...{this.state.counter}</Button>;
  }
}

LifeCyclePerformer.propTypes = {
  onLifeCycleMethodCalled: func.isRequired
};

export default LifeCyclePerformer;
