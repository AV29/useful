import React from 'react';
import { TooltipHoverTarget } from './styles';
import { DemoSection } from '../../../styles/styles';
import Tooltip from '../../reusable/tooltip/Tooltip';

export default function TooltipDemo() {
  return (
    <DemoSection>
      <Tooltip
        renderHoverTarget={({ bindRef }) => (
          <TooltipHoverTarget ref={bindRef}>Hover to see custom tooltip</TooltipHoverTarget>)}
      >
        <span>Here is a tooltip!!!</span>
      </Tooltip>
    </DemoSection>
  );
}
