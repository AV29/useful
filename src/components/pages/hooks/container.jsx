import React, { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { DemoSection, Heading, GridWrapper, SmallHeading, List, Section } from '../../../styles/styles';
import { string } from 'prop-types';
import Clock from './Clock';
import DynamicTimer from './DynamicTimer';
import DataForm from './DataForm';
import Button from '../../reusable/controls/button/Button';
import { Tooltip } from '../../reusable/tooltip/Tooltip';
import { HooksContextMenu2, HooksContextMenu } from '../../reusable/context-menu/ContextMenu';
import useContextMenu from '../../../hooks/useContextMenu';
import { useMouseHover } from '../../../hooks/useMouseHover';
import { StyledContextMenuDemoTarget } from './styles';

const items = [{ id: '1', labelKey: 'hook' }, { id: '2', labelKey: 'hoc' }, { id: '3', labelKey: 'facc' }];

function Hooks (props) {
  const [selectedItem, setSelectedItem] = useState('hoc');
  const [contextMenuCallerRef, coords, handleClose] = useContextMenu();
  const [hoverRef, isHovering] = useMouseHover();
  const { t } = useTranslation('common');

  return (
    <Fragment>
      <Heading>{t(props.nameKey)}</Heading>
      <GridWrapper>
        <DemoSection>
          <DynamicTimer/>
        </DemoSection>
        <DemoSection>
          <DataForm/>
        </DemoSection>
        <DemoSection>
          <Clock/>
        </DemoSection>
        <DemoSection>
          <StyledContextMenuDemoTarget ref={contextMenuCallerRef}>
            {`${t('rightClickHere')} (${t('composable')})`}
          </StyledContextMenuDemoTarget>

          <HooksContextMenu handleClose={handleClose} coords={coords}>
            <List>
              <Button onClick={handleClose}>{t('close')}</Button>
              {
                items.map(({ labelKey, id }) => (
                  <li
                    key={id}
                    onClick={() => setSelectedItem(labelKey)}
                  >
                    {t(labelKey)}
                  </li>
                ))
              }
            </List>
          </HooksContextMenu>

          <SmallHeading>{t(selectedItem)}</SmallHeading>

          <HooksContextMenu2
            closeOnClickInside
            target={
              <StyledContextMenuDemoTarget>
                {`${t('rightClickHere')} (${t('configurable')})`}
              </StyledContextMenuDemoTarget>
            }
          >
            <List>
              {
                items.map(({ labelKey, id }) => (
                  <li
                    key={id}
                    onMouseDown={() => setSelectedItem(labelKey)}
                  >
                    {t(labelKey)}
                  </li>
                ))
              }
            </List>
          </HooksContextMenu2>
        </DemoSection>
        <DemoSection>
          <Section>
            <SmallHeading ref={hoverRef}>{t('hoverToCallTooltip')}</SmallHeading>
          </Section>
          {
            isHovering &&
            <Tooltip targetRef={hoverRef}>
              {t('hoverHereHideTooltip')}
            </Tooltip>
          }
        </DemoSection>
      </GridWrapper>
    </Fragment>
  );
}

Hooks.propTypes = {
  nameKey: string
};

export default Hooks;
