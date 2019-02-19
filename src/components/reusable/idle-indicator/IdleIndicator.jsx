import React, { Component } from 'react';
import { number, object, bool } from 'prop-types';

class IdleIndicator extends Component {

  constructor (props) {
    super(props);

    this.startAnimation = this.startAnimation.bind(this);
    this.drawFrame = this.drawFrame.bind(this);
    this.drawCallback = this.drawCallback.bind(this);
    this.trigger = this.trigger.bind(this);

    this.idleIndicator = null;
  }

  drawCallback () {
    if (this.props.destroyOnEnd) {
      this.idleIndicator.style.width = '0px';
    }
  }

  drawFrame (progress) {
    this.idleIndicator.style.width = `${progress * 100}%`;
    if (this.props.colors) {
      this.idleIndicator.style.backgroundColor = `rgb(${255 - progress * 100}, 230, 50)`;
    }
  }

  startAnimation (draw, duration, callback) {
    const start = performance.now();
    requestAnimationFrame(function drawFrame (time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) {
        timeFraction = 1;
      }

      draw(timeFraction);

      timeFraction < 1
        ? requestAnimationFrame(drawFrame)
        : callback();
    });
  }

  trigger () {
    this.startAnimation(this.drawFrame, this.props.idleTime, this.drawCallback);
  }

  render () {
    return (
      <div
        style={this.props.style}
        ref={ii => this.idleIndicator = ii}
        className="llamasoft-idle-indicator"
      />
    );
  }
}

IdleIndicator.defaultProps = {
  idleTime: 0,
  destroyOnEnd: true
};

IdleIndicator.propTypes = {
  colors: bool,
  destroyOnEnd: bool,
  idleTime: number,
  style: object
};

export default IdleIndicator;
