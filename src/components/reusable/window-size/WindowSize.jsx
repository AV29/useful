import { Component } from 'react';
import { func } from 'prop-types';

class WindowSize extends Component {

  constructor (props) {
    super(props);

    this.handleResizeWindow = this.handleResizeWindow.bind(this);

    this.state = {
      width: 0,
      height: 0
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResizeWindow);
    this.handleResizeWindow();
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResizeWindow);
  }

  handleResizeWindow () {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });

    this.props.onWindowResized({ windowWidth: this.state.width, windowHeight: this.state.height });
  }

  render () {
    return this.props.children({ windowWidth: this.state.width, windowHeight: this.state.height });
  }
}

WindowSize.propTypes = {
  children: func,
  onWindowResized: func
};

WindowSize.defaultProps = {
  onWindowResized: () => undefined
};

export default WindowSize;
