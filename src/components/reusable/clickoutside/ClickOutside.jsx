import { Component } from 'react';
import { func, arrayOf, string } from 'prop-types';
import { addEvent, removeEvent } from '../../../utilities/events';

class ClickOutside extends Component {

  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.bindRef = this.bindRef.bind(this);
  }

  componentDidMount () {
    this.props.eventTypes.forEach(addEvent(this.handleClick));
  }

  componentWillUnmount () {
    this.props.eventTypes.forEach(removeEvent(this.handleClick));
  }

  bindRef (element) {
    this.target = element;
  }

  handleClick ({ clientX: mouseX, clientY: mouseY }) {
    if (!this.target) return;
    const { left, top, right, bottom } = this.target.getBoundingClientRect();
    if (mouseX > right || mouseX < left || mouseY > bottom || mouseY < top) {
      this.props.onClickedOutside();
    } else {
      this.props.onClickedInside();
    }
  }

  render () {
    return this.props.children({ bindRef: this.bindRef });
  }
}

ClickOutside.propTypes = {
  children: func,
  onClickedOutside: func,
  onClickedInside: func,
  eventTypes: arrayOf(string).isRequired
};

ClickOutside.defaultProps = {
  onClickedOutside: () => undefined,
  onClickedInside: () => undefined,
  eventTypes: ['mousedown']
};

export default ClickOutside;
