import React, { useState } from 'react';
import { StyledContextMenuDemoTarget } from './styles';
import { HooksContextMenu, HooksContextMenu2 } from '../../reusable/context-menu/ContextMenu';
import { List, FlexRow, PaddedHeading } from '../../../styles/styles';
import Button from '../../reusable/controls/button/Button';
import { useTranslation } from 'react-i18next';
import useContextMenu from '../../../hooks/useContextMenu';

const items = [{ id: '1', labelKey: 'hook' }, { id: '2', labelKey: 'hoc' }, { id: '3', labelKey: 'facc' }];

function UseContextMenu () {
  const [selectedItem, setSelectedItem] = useState('hoc');
  const { t } = useTranslation('common');
  const [contextMenuCallerRef, coords, handleClose] = useContextMenu();
  return (
    <FlexRow>
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

      <PaddedHeading right={20} left={20}>{t(selectedItem)}</PaddedHeading>

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
    </FlexRow>
  );
}

export default UseContextMenu;
