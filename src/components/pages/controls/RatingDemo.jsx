import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Rating from '../../reusable/controls/rating/Rating';

export default function RatingDemo (props) {
  const { t } = useTranslation('common');
  const [value, onChange] = useState(8);
  return (
    <Rating
      scaleSize={10}
      label={t('tvShowRating')}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}
