import React, { Component } from 'react';
import { func } from 'prop-types';
import Button from '../../reusable/button/Button';

class LifeCyclePerformer extends Component {

  static getDerivedStateFromProps(props, state) {
    props.onLifeCycleMethodCall('Get Derived State From Props', { props, state });
    return {};
  }

  constructor(props, context) {
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

  componentDidMount() {
    this.props.onLifeCycleMethodCall('Component Did Mount', { props: this.props, state: this.state });
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    this.props.onLifeCycleMethodCall('Should Component Update', { nextProps, nextState, nextContext });
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
    this.props.onLifeCycleMethodCall('Get Snapshot Before Update', { props: prevProps, state: prevState });
    return {
      windowHeight: window.innerHeight
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.props.onLifeCycleMethodCall('Component Did Update', { prevProps, prevState, snapshot });
  }

  componentWillUnmount() {
    this.props.onLifeCycleMethodCall('Component Will Unmount', { props: this.props, state: this.state });
  }

  handleUpdate() {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  }

  render() {
    this.props.onLifeCycleMethodCall('Render');
    return <Button onClick={this.handleUpdate}>Update Me...{this.state.counter}</Button>;
  }
}

LifeCyclePerformer.propTypes = {
  onLifeCycleMethodCall: func.isRequired
};

export default LifeCyclePerformer;
