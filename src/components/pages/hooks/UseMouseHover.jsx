import React, { Fragment } from 'react';
import { Section, SmallHeading } from '../../../styles/styles';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '../../reusable/tooltip/Tooltip';
import { useMouseHover } from '../../../hooks/useMouseHover';

function UseMouseHover () {
  const [hoverRef, isHovering] = useMouseHover();
  const { t } = useTranslation('common');

  return (
    <Fragment>
      <Section>
        <SmallHeading ref={hoverRef}>{t('hoverToCallTooltip')}</SmallHeading>
      </Section>
      {
        isHovering &&
        <Tooltip targetRef={hoverRef}>
          {t('hoverHereHideTooltip')}
        </Tooltip>
      }
    </Fragment>
  );
}

export default UseMouseHover;
