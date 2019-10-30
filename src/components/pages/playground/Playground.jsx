import React from 'react';
import Input from './Input';

class Playground extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      value: 'Initial value'
    };

    this.input = null;
  }

  render () {
    return (
      <div>
        <Input
          inputRef={el => this.input = el}
          type={'number'}
          value={this.state.value}
          onChange={event => this.setState({ value: event.target.value })}
        />
        <button onClick={() => this.input.focus()}>Press me</button>
      </div>
    );
  }
}

export default Playground;
