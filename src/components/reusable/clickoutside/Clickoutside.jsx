import { Component } from 'react';
import { func, arrayOf, string } from 'prop-types';

class Clickoutside extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.bindRef = this.bindRef.bind(this);
  }

  componentDidMount() {
    this.props.eventTypes.forEach((event) => {
      window.addEventListener(event, this.handleClick);
    });
  }

  componentWillUnmount() {
    this.props.eventTypes.forEach((event) => {
      window.removeEventListener(event, this.handleClick);
    });
  }

  bindRef(element) {
    this.target = element;
  }

  handleClick({ clientX: mouseX, clientY: mouseY }) {
    if (!this.target) return;
    const { left, top, right, bottom } = this.target.getBoundingClientRect();
    if (mouseX > right || mouseX < left || mouseY > bottom || mouseY < top) {
      this.props.onClickedOutside();
    } else {
      this.props.onClickedInside();
    }
  }

  render() {
    return this.props.children({ bindRef: this.bindRef });
  }
}

Clickoutside.propTypes = {
  children: func,
  onClickedOutside: func,
  onClickedInside: func,
  eventTypes: arrayOf(string).isRequired
};

Clickoutside.defaultProps = {
  onClickedOutside: () => undefined,
  onClickedInside: () => undefined,
  eventTypes: ['mousedown']
};

export default Clickoutside;
