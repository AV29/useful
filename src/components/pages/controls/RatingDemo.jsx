import React from 'react';
import { useTranslation } from 'react-i18next';
import { DemoSection } from '../../../styles/styles';
import Rating from '../../reusable/controls/rating/Rating';

export default function RatingDemo (props) {
  const { t } = useTranslation('common');
  return (
    <DemoSection>
      <Rating
        scaleSize={10}
        label={t('ratingControl')}
        {...props}
      />
    </DemoSection>
  );
}
