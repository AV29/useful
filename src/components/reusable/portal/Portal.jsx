import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

class Portal extends Component {

  componentWillUnmount () {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }
    this.defaultNode = null;
  }

  render () {
    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }
    return createPortal(this.props.children, this.props.node || this.defaultNode);
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.oneOfType([PropTypes.object, PropTypes.node])
};

export default Portal;