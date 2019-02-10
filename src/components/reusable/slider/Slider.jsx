import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Slider.less';

class Slider extends Component {

  static getDerivedStateFromProps(props, { values }) {
    const currentValue = values.findIndex(({ value }) => value === Slider.getProperValue(props));
    return { currentValue: currentValue > 0 ? currentValue : 0 };
  }

  static getProperValue({ value, simpleValue }) {
    if (simpleValue) {
      return value;
    } else {
      return typeof value === 'object' ? value.value : value;
    }
  }

  constructor(props) {
    super(props);

    this.handleDragThumb = this.handleDragThumb.bind(this);
    this.handleClickSlider = this.handleClickSlider.bind(this);
    this.handleCaptureDrag = this.handleCaptureDrag.bind(this);
    this.handleReleaseDrag = this.handleReleaseDrag.bind(this);

    this.state = {
      values: props.steps.map((step, index) => ({ ...step, index })),
      currentValue: 0
    };

    this.isThumbBeingDragged = false;

  }

  getThumbDragDirection(mouseX) {
    const { left: thumbLeft, right: thumbRight } = this.thumb.getBoundingClientRect();
    const { left: sliderLeft, right: sliderRight } = this.slider.getBoundingClientRect();
    const sectionWidth = (sliderRight - sliderLeft) / (this.props.steps.length - 1);
    return {
      isMovingRight: mouseX > thumbRight + (sectionWidth / 2) && mouseX <= sliderRight,
      isMovingLeft: mouseX < thumbLeft - (sectionWidth / 2) && mouseX >= sliderLeft
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
    this.toggleMouseEventsOnDrag(this.slider);
    document.addEventListener('mousemove', this.handleDragThumb);
    document.addEventListener('mouseup', this.handleReleaseDrag);
  }

  handleReleaseDrag() {
    this.toggleMouseEventsOnDrag(this.slider);
    document.removeEventListener('mousemove', this.handleDragThumb);
    document.removeEventListener('mouseup', this.handleReleaseDrag);
  }

  stepDown() {
    const nextValue = this.props.steps[this.state.currentValue - 1];
    this.props.onChange(this.props.simpleValue ? nextValue.value : nextValue);
  }

  stepUp() {
    const nextValue = this.props.steps[this.state.currentValue + 1];
    this.props.onChange(this.props.simpleValue ? nextValue.value : nextValue);
  }

  /**
   * Handling situation when mouseDown event starts on thumb but release ends on slider thus causing sliders onClick.
   * Even with stopPropagation being called.
   * Event only stops propagation if release phase was while over the same element.
   * */
  toggleMouseEventsOnDrag(element) {
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
    this.tooltip.style.transform = this.getTranslateOffset(this.state.currentValue);
  }

  getTooltipContent() {
    const currentStepObj = this.props.steps.find(({ value, tooltip }) => value === this.props.value && tooltip);
    return currentStepObj
      ? <div style={{ padding: 5 }}>{currentStepObj.tooltip}</div>
      : null;
  }

  render() {
    const { label, style, steps } = this.props;

    const leftOffset = `${this.getLeftOffset(this.state.currentValue)}%`;
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

Slider.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string,
    tooltip: PropTypes.string
  })).isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  simpleValue: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  style: PropTypes.object
};

Slider.defaultProps = {
  simpleValue: true,
  onChange: () => {
  }
};

export default Slider;
