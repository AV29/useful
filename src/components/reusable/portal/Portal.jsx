import { Component } from 'react';
import { createPortal } from 'react-dom';
import { node, oneOfType, object } from 'prop-types';

class Portal extends Component {

  componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }
    this.defaultNode = null;
  }

  render() {
    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }
    return createPortal(this.props.children, this.props.node || this.defaultNode);
  }
}

Portal.propTypes = {
  children: node.isRequired,
  node: oneOfType([object, node])
};

export default Portal;
