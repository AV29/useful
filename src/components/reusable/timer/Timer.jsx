import React, { Component } from 'react';
import { number } from 'prop-types';
import { StyledTimer } from './styles';

class Timer extends Component {

  constructor (props) {
    super(props);

    this.state = {
      timer: 0
    };

    this.handleCount = this.handleCount.bind(this);
  }

  componentWillUnmount () {
    this.stop();
  }

  trigger () {
    this.setState({ timer: 0 }, () => this.timer = setInterval(this.handleCount, this.props.step));
  }

  stop () {
    this.timer && clearInterval(this.timer);
  }

  handleCount () {
    this.setState(({ timer }) => ({
      timer: timer + this.props.step
    }));
  }

  render () {
    return <StyledTimer>{(this.state.timer / 1000).toFixed(this.props.precision)}</StyledTimer>;
  }
}

Timer.propTypes = {
  precision: number,
  step: number
};

Timer.defaultProps = {
  precision: 2,
  step: 5
};

export default Timer;
