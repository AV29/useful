import React from 'react';
import { useTranslation } from 'react-i18next';
import Rating from '../../reusable/controls/rating/Rating';

export default function RatingDemo (props) {
  const { t } = useTranslation('common');
  return (
    <Rating
      scaleSize={10}
      label={t('tvShowRating')}
      {...props}
    />
  );
}
