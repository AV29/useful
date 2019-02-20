import React from 'react';
import { number, func } from 'prop-types';
import { StyledResizerWrapper, StyledResizeHandler } from './styles';

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

      const width = this.state.initialWidth + (event.screenX - this.state.initialScreenX);
      this.setState({ width });
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
        <StyledResizerWrapper style={{ width: this.state.width }}>
          <StyledResizeHandler
            onMouseDown={this.handleCapture}
            onDragStart={() => false}
          />
          <Component {...this.props}/>
        </StyledResizerWrapper>
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
