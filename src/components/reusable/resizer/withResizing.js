import React from 'react';
import { number, func } from 'prop-types';
import './Resizer.less';

function withResizing (Component) {

  class WrappedComponent extends React.Component {
    constructor (props) {
      super(props);

      this.handleCapture = this.handleCapture.bind(this);
      this.handleResize = this.handleResize.bind(this);
      this.handleRelease = this.handleRelease.bind(this);

      this.state = {
        width: this.props.initialWidth,
        initialWidth: this.props.initialWidth,
        isResizing: false,
        initialScreenX: 0,
        marginLeft: 0,
        currentMouseX: 0
      };
    }

    handleCapture (event) {
      event.preventDefault();
      document.addEventListener('mousemove', this.handleResize);
      document.addEventListener('mouseup', this.handleRelease);
      this.setState({
        isResizing: true,
        initialScreenX: event.screenX,
        currentMouseX: event.clientX
      });
    }

    handleResize (event) {
      event.preventDefault();

      const { clientX } = event;
      if(clientX > this.left.getBoundingClientRect().right && clientX < this.right.getBoundingClientRect().left) {
        console.log('adsasdas');
        const width = this.state.initialWidth - (event.screenX - this.state.initialScreenX);
        this.setState({ width, marginLeft: event.screenX - this.state.initialScreenX });

      }
      //const width = event.screenX - this.state.initialScreenX + this.state.initialWidth;

      //this.props.onResized(width);
    }

    handleRelease (event) {
      event.preventDefault();
      document.removeEventListener('mousemove', this.handleResize);
      document.removeEventListener('mouseup', this.handleRelease);
      this.setState({
        isResizing: false,
        initialWidth: this.state.width,
        initialScreenX: event.screenX
      });
      this.props.onResized(this.state.width);
    }

    render () {
      return (
        <div
          className="resize-wrapper"
          style={{ width: this.state.width, marginLeft: this.state.marginLeft }}
        >
          <div
            onMouseDown={this.handleCapture}
            onDragStart={() => false}
            ref={left => this.left = left}
            className="resize-border resize-border-left"
          />
          <div
            onMouseDown={this.handleCapture}
            onDragStart={() => false}
            ref={right => this.right = right}
            className="resize-border resize-border-right"
          />
          <div
            // onMouseDown={this.handleCapture}
            // onDragStart={() => false}
            className="resize-border resize-border-top"
          />
          <div
            // onMouseDown={this.handleCapture}
            // onDragStart={() => false}
            className="resize-border resize-border-bottom"
          />
          <Component {...this.props}/>
        </div>
      );
    }
  }

  WrappedComponent.propTypes = {
    onResized: func,
    initialWidth: number.isRequired
  };

  WrappedComponent.defaultProps = {
    onResized: () => undefined
  };

  return WrappedComponent;
}

export default withResizing;
