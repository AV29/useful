import React from 'react';
import { DemoSection } from '../../../styles/styles';
import Rating from '../../reusable/controls/rating/Rating';

export default function RatingDemo (props) {
  return (
    <DemoSection>
      <Rating
        scaleSize={10}
        label="Rating Control"
        {...props}
      />
    </DemoSection>
  );
}
