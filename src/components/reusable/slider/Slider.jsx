import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Slider.less';

class SliderControl extends Component {
  constructor(props) {
    super(props);

    this.handleClickSlider = this.handleClickSlider.bind(this);
    this.handleCaptureDrag = this.handleCaptureDrag.bind(this);
    this.handleReleaseDrag = this.handleReleaseDrag.bind(this);
    this.handleDragThumb = this.handleDragThumb.bind(this);

    this.isThumbBeingDragged = false;
  }

  getThumbDragDirection(mouseX) {
    const { left: thumbLeft, right: thumbRight } = this.thumb.getBoundingClientRect();
    const { left: sliderLeft, right: sliderRight } = this.slider.getBoundingClientRect();
    const offsetForChangeValueWhileDragging = (sliderRight - sliderLeft) / ((this.props.steps.length - 1) * 2);
    return {
      isMovingRight: mouseX > thumbRight + offsetForChangeValueWhileDragging && mouseX <= sliderRight,
      isMovingLeft: mouseX < thumbLeft - offsetForChangeValueWhileDragging && mouseX >= sliderLeft
    };
  }

  handleClickSlider({ clientX: mouseX }) {
    const { left: thumbLeft, right: thumbRight } = this.thumb.getBoundingClientRect();
    if (mouseX < thumbLeft - 5) {
      this.stepDown();
    } else if (mouseX > thumbRight + 5) {
      this.stepUp();
    }
  }

  handleDragThumb({ clientX: mouseX }) {
    const { isMovingRight, isMovingLeft } = this.getThumbDragDirection(mouseX);
    if (isMovingRight) {
      this.stepUp();
    } else if (isMovingLeft) {
      this.stepDown();
    }
    this.setTooltipPosition();
  }

  handleCaptureDrag() {
    this.setTooltipPosition();
    this.toggleMouseEventsDuringDrag(this.slider);
    document.addEventListener('mousemove', this.handleDragThumb);
    document.addEventListener('mouseup', this.handleReleaseDrag);
  }

  handleReleaseDrag() {
    this.toggleMouseEventsDuringDrag(this.slider);
    document.removeEventListener('mousemove', this.handleDragThumb);
    document.removeEventListener('mouseup', this.handleReleaseDrag);
  }

  /**ToDo: Works with assumption that values given in steps are incremental and starts with 1
   * ToDo: Need to adjust steps with id fields. */

  stepDown() {
    this.props.onChange(this.props.value - 1);
  }

  stepUp() {
    this.props.onChange(this.props.value + 1);
  }

  /**
   * Handling situation when mouseDown event starts on thumb but release ends on slider thus causing sliders onClick.
   * Even with stopPropagation being called.
   * Event only stops propagation if release phase was while over the same element.
   * */
  toggleMouseEventsDuringDrag(element) {
    this.isThumbBeingDragged = !this.isThumbBeingDragged;
    element.style.pointerEvents = this.isThumbBeingDragged ? 'none' : 'all';
  }

  getLeftOffset(index) {
    return 100 * index / (this.props.steps.length - 1);
  }

  getTranslateOffset(index) {
    return `translateX(${-1 * this.getLeftOffset(index)}%)`;
  }

  setTooltipPosition() {
    this.tooltip.style.transform = this.getTranslateOffset(this.props.value - 1);
  }

  getTooltipContent() {
    const currentStepObj = this.props.steps.find(({ value, tooltip }) => value === this.props.value && tooltip);
    return currentStepObj ? currentStepObj.tooltip : null;
  }

  render() {
    const { label, style, steps, value } = this.props;
    const leftOffset = `${this.getLeftOffset(value - 1)}%`;
    return (
      <div className="sliderControl" style={style}>
        {label && <div className="label">{label}</div>}
        <div
          ref={slider => this.slider = slider}
          onClick={this.handleClickSlider}
          className="slider"
        >
          <div className="fillLower" style={{ width: leftOffset }}/>
          <button
            ref={th => this.thumb = th}
            className="thumb"
            style={{ left: leftOffset }}
            onClick={event => event.preventDefault()}
            onMouseDown={this.handleCaptureDrag}
            onDragStart={() => false}
          >
            <div
              ref={tt => this.tooltip = tt}
              className="tooltip"
            >
              {this.getTooltipContent()}
            </div>
          </button>
        </div>
        <div className="stepLabels">
          {
            steps.map(({ label }, index) => label && (
              <span
                key={index}
                className="stepLabel label"
                style={{
                  left: `${this.getLeftOffset(index)}%`,
                  transform: this.getTranslateOffset(index)
                }}
              >
                {label}
              </span>
            ))
          }
        </div>
      </div>
    );
  }
}

SliderControl.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string,
    tooltip: PropTypes.string
  })).isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func,
  label: PropTypes.string,
  style: PropTypes.object
};

SliderControl.defaultProps = {
  onChange: () => {
  }
};

export default SliderControl;
