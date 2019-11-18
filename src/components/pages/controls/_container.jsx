import React from 'react';
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
import Spiral from './Spiral';

function Controls (props) {
  const { t } = useTranslation('common');
  return (
    <>
      <Heading>{t(props.nameKey)}</Heading>
      <GridWrapper>
        <DemoSection title={t('generatingTree')}>
          <TreeViewDemo />
        </DemoSection>
        <DemoSection title={t('spiralRender')}>
          <Spiral />
        </DemoSection>
        <DemoSection title={t('sliderExample')}>
          <SliderDemo />
        </DemoSection>
        <DemoSection title={t('ratingControl')}>
          <RatingDemo />
        </DemoSection>
        <DemoSection title={t('toggleExample')}>
          <ToggleDemo />
        </DemoSection>
        <DemoSection title={t('idleIndicatorExample')}>
          <IdleIndicatorDemo />
        </DemoSection>
        <DemoSection title={t('checkboxExample')}>
          <CheckBoxesDemo />
        </DemoSection>
        <DemoSection title={t('adjacentCalc')}>
          <AdjacentCalc />
        </DemoSection>
      </GridWrapper>
    </>
  );
}

Controls.propTypes = {
  nameKey: string
};

export default Controls;
