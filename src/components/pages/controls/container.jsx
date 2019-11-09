import React, { useState, useRef, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { string } from 'prop-types';
import SliderDemo from './SliderDemo';
import ToggleDemo from './ToggleDemo';
import RatingDemo from './RatingDemo';
import IdleIndicatorDemo from './IdleIndicatorDemo';
import { GridWrapper, Heading } from '../../../styles/styles';
import DemoSection from '../../reusable/demo-section/DemoSection';
import CheckBoxesDemo from './CheckBoxesDemo';
import TreeViewDemo from './TreeViewDemo';
import AdjacentCalc from './AdjacentCalc';

function Controls (props) {
  const { t } = useTranslation('common');
  const [sliderValue, setSliderValue] = useState(2);
  const [ratingValue, setRatingValue] = useState(8);
  const [isInIdle, toggleInIdle] = useState(false);
  const idleIndicator = useRef(null);
  const timer = useRef(null);

  return (
    <Fragment>
      <Heading>{t(props.nameKey)}</Heading>
      <GridWrapper>
        <DemoSection title={t('sliderExample')}>
          <SliderDemo
            value={sliderValue}
            onChange={setSliderValue}
          />
        </DemoSection>
        <DemoSection title={t('ratingControl')}>
          <RatingDemo
            value={ratingValue}
            onChange={setRatingValue}
          />
        </DemoSection>
        <DemoSection title={t('toggleExample')}>
          <ToggleDemo />
        </DemoSection>
        <DemoSection title={t('idleIndicatorExample')}>
          <IdleIndicatorDemo
            idle={isInIdle}
            onFinished={() => {
              toggleInIdle(false);
              timer.current.stop();
            }}
            onStartIdle={() => {
              toggleInIdle(true);
              idleIndicator.current.trigger();
              timer.current.trigger();
            }}
            bindTimer={timer}
            bindIndicator={idleIndicator}
          />
        </DemoSection>
        <DemoSection title={t('checkboxExample')}>
          <CheckBoxesDemo />
        </DemoSection>
        <DemoSection>
          <AdjacentCalc />
        </DemoSection>
        <DemoSection>
          <TreeViewDemo />
        </DemoSection>
      </GridWrapper>
    </Fragment>
  );
}

Controls.propTypes = {
  nameKey: string
};

export default Controls;
