import React, { PureComponent } from 'react';
import { shape, number, string, func, bool, objectOf, oneOfType } from 'prop-types';
import { StyledSlider, Label, Track, Thumb, FillLower, TooltipContainer, Tooltip, TickMarks, TickMark } from './styles';

class Slider extends PureComponent {
  constructor (props) {
    super(props);

    this.handleDragThumb = this.handleDragThumb.bind(this);
    this.handleClickSlider = this.handleClickSlider.bind(this);
    this.handleCaptureDrag = this.handleCaptureDrag.bind(this);
    this.handleReleaseDrag = this.handleReleaseDrag.bind(this);

    this.isThumbBeingDragged = false;
  }

  getSectionWidth () {
    const { left: sliderLeft, right: sliderRight } = this.track.getBoundingClientRect();
    return (sliderRight - sliderLeft) / (this.props.max - this.props.min);
  }

  getTrackValue (clickedX) {
    const { left: sliderLeft } = this.track.getBoundingClientRect();
    return Math.round((clickedX - sliderLeft) / this.getSectionWidth()) + 1;
  }

  getThumbDragDirection (mouseX) {
    const { left: thumbLeft, right: thumbRight } = this.thumb.getBoundingClientRect();
    const sectionWidth = this.getSectionWidth();
    return {
      isMovingRight: mouseX > thumbRight + (sectionWidth * this.props.step / 2),
      isMovingLeft: mouseX < thumbLeft - (sectionWidth * this.props.step / 2)
    };
  }

  getReachedBounds () {
    return {
      minReached: this.props.value <= this.props.min,
      maxReached: this.props.value >= this.props.max
    };
  }

  handleClickSlider ({ clientX: mouseX }) {
    const { maxReached, minReached } = this.getReachedBounds();
    const { left: thumbLeft, right: thumbRight } = this.thumb.getBoundingClientRect();
    if (this.props.stepPerClick) {
      if (mouseX < thumbLeft - 5 && !minReached) {
        this.decrease();
      } else if (mouseX > thumbRight + 5 && !maxReached) {
        this.increase();
      }
    } else {
      this.props.onChange(this.getTrackValue(mouseX));
    }
  }

  handleDragThumb ({ clientX: mouseX }) {
    const { maxReached, minReached } = this.getReachedBounds();
    const { isMovingRight, isMovingLeft } = this.getThumbDragDirection(mouseX);
    if (isMovingRight && !maxReached) {
      this.increase();
    } else if (isMovingLeft && !minReached) {
      this.decrease();
    }
  }

  handleCaptureDrag () {
    this.toggleMouseEventsOnDrag(this.track);
    document.addEventListener('mousemove', this.handleDragThumb);
    document.addEventListener('mouseup', this.handleReleaseDrag);
  }

  handleReleaseDrag () {
    this.toggleMouseEventsOnDrag(this.track);
    document.removeEventListener('mousemove', this.handleDragThumb);
    document.removeEventListener('mouseup', this.handleReleaseDrag);
  }

  increase () {
    this.props.onChange(this.props.value + this.props.step);
  }

  decrease () {
    this.props.onChange(this.props.value - this.props.step);
  }

  /**
   * Handling situation when mouseDown event starts on thumb but release ends on slider thus causing sliders onClick.
   * Even with stopPropagation being called.
   * Event only stops propagation if release phase was while over the same element.
   * */
  toggleMouseEventsOnDrag (element) {
    this.isThumbBeingDragged = !this.isThumbBeingDragged;
    element.style.pointerEvents = this.isThumbBeingDragged ? 'none' : 'all';
  }

  getLeftOffset (index) {
    return 100 * index / (this.props.max - this.props.min);
  }

  getCurrentTooltip () {
    return this.props.info ? (this.props.info[this.props.value] || {}).tooltip : null;
  }

  getValidatedValue () {
    if (this.props.value > this.props.max) {
      return this.props.max - 1;
    } else if (this.props.value < this.props.min) {
      return this.props.min - 1;
    } else {
      return Math.round(this.props.value - 1);
    }
  }

  render () {
    const { className, label, thickness } = this.props;
    const leftOffset = this.getLeftOffset(this.getValidatedValue());
    const tooltip = this.getCurrentTooltip();

    return (
      <StyledSlider className={className}>
        {label && <Label>{label}</Label>}
        <Track
          ref={track => this.track = track}
          thickness={thickness}
          onClick={this.handleClickSlider}
        >
          <FillLower fill={leftOffset}/>
          <Thumb
            ref={th => this.thumb = th}
            leftOffset={leftOffset}
            thickness={thickness}
            onMouseDown={this.handleCaptureDrag}
            onDragStart={() => false}
          >
            <TooltipContainer leftOffset={leftOffset}>{tooltip && <Tooltip>{tooltip}</Tooltip>}</TooltipContainer>
          </Thumb>
        </Track>
        <TickMarks>
          {
            Object
              .values(this.props.info || {})
              .map(({ tickMark }, index) => tickMark && (
                <TickMark key={index} offset={this.getLeftOffset(index)}>{tickMark}</TickMark>
              ))
          }
        </TickMarks>
      </StyledSlider>
    );
  }
}

Slider.propTypes = {
  step: number,
  thickness: number,
  min: number.isRequired,
  max: number.isRequired,
  value: number.isRequired,
  onChange: func.isRequired,
  label: string,
  className: string,
  stepPerClick: bool, /** If set to true - then slider value will be increased/decreased by 1 step on each click */
  info: objectOf(shape({
    tooltip: oneOfType([number, string]),
    tickMark: oneOfType([number, string])
  })),
  theme: shape({
    trackColor: string,
    thumbColor: string
  })
};

Slider.defaultProps = {
  theme: { trackColor: '#288dc8', thumbColor: '#666666' },
  stepPerClick: false,
  step: 1,
  min: 1,
  max: 2,
  thickness: 5,
  onChange: () => undefined
}
;

export default Slider;
