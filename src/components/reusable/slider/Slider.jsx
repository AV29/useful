import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Slider.less';

class Slider extends Component {

  constructor(props) {
    super(props);

    this.handleDragThumb = this.handleDragThumb.bind(this);
    this.handleClickSlider = this.handleClickSlider.bind(this);
    this.handleCaptureDrag = this.handleCaptureDrag.bind(this);
    this.handleReleaseDrag = this.handleReleaseDrag.bind(this);

    this.isThumbBeingDragged = false;

    /** Handling actual index value and thus not being depend on whether passed values are incremental or not */
    this.state = {
      index: props.steps.findIndex(({ value }) => value === props.value)
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.index !== nextState.index;
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
  }

  handleCaptureDrag() {
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
    this.step(this.state.index - 1);
  }

  stepUp() {
    this.step(this.state.index + 1);
  }

  step(index) {
    const { steps, onChange, simpleValue } = this.props;
    const nextValue = simpleValue ? steps[index].value : steps[index];
    this.setState({ index }, () => onChange(nextValue));
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

  render() {
    const { index } = this.state;
    const { label, style, steps } = this.props;
    const { tooltip } = steps[index];
    const leftOffset = this.getLeftOffset(index);

    return (
      <div className="sliderControl" style={style}>
        {label && <div className="label">{label}</div>}
        <div
          ref={slider => this.slider = slider}
          onClick={this.handleClickSlider}
          className="slider"
        >
          <div className="fillLower" style={{ width: `${leftOffset}%` }}/>
          <button
            ref={th => this.thumb = th}
            className="thumb"
            style={{ left: `${leftOffset}%` }}
            onMouseDown={this.handleCaptureDrag}
            onDragStart={() => false}
          >
            <div
              className="tooltip"
              style={{ transform: `transform(${-1 * leftOffset})` }}
            >
              {tooltip && <div style={{ padding: 5 }}>{tooltip}</div>}
            </div>
          </button>
        </div>
        <div className="stepLabels">
          {
            steps.map(({ label }, index) => {
              const offset = this.getLeftOffset(index);
              return label && (
                <span
                  key={index}
                  className="stepLabel label"
                  style={{
                    left: `${offset}%`,
                    transform: `transform(${-1 * offset})`
                  }}
                >
                  {label}
                </span>
              );
            })
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
