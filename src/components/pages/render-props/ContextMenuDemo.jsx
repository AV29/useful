import React from 'react';
import { useTranslation } from 'react-i18next';
import { func, string, arrayOf, shape } from 'prop-types';
import { ContextMenuCaller } from './styles';
import { Flex, SmallHeading, List } from '../../../styles/styles';
import ContextMenu from '../../reusable/context-menu/ContextMenu';

export default function ContextMenuDemo ({ selectedItem, onChooseItem, items }) {
  const { t } = useTranslation('common');
  return (
    <ContextMenu
      renderCaller={({ handleShowMenu }) => (
        <Flex>
          <ContextMenuCaller
            onContextMenu={(event) => {
              event.preventDefault();
              handleShowMenu(event);
            }}
          >
            {t('rightClickToChooseFramework')}
          </ContextMenuCaller>
          <SmallHeading>{selectedItem}</SmallHeading>
        </Flex>
      )}
    >
      {({ handleHideMenu }) => (
        <List>
          {
            items.map(({ text, id }) => (
              <li
                key={id}
                onClick={
                  (event) => {
                    text !== selectedItem && onChooseItem(text);
                    handleHideMenu(event);
                  }
                }
              >
                {text}
              </li>
            ))
          }
        </List>
      )}
    </ContextMenu>
  );
}

ContextMenuDemo.propTypes = {
  onChooseItem: func,
  selectedItem: string,
  items: arrayOf(shape({ id: string, text: string }))
};
