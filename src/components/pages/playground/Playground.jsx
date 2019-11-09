import React from 'react';
import { getWeekDays } from '../../../utilities/date';

class Playground extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 1
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState(state => ({ count: state.count + 1 }));
    console.log(getWeekDays(new Date()));
  }

  render () {
    return (
      <button onClick={this.handleClick}>{this.state.count}</button>
    );
  }
}

export default Playground;
