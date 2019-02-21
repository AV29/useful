import React from 'react';
import { func, string } from 'prop-types';
import { ContextMenuCaller, StyledList } from './styles';
import { DemoSection, Flex, SmallHeading } from '../../../styles/styles';
import ContextMenu from '../../reusable/context-menu/ContextMenu';

const items = [{ id: '1', text: 'Angular' }, { id: '2', text: 'React' }, { id: '3', text: 'Vue' }];

export default function ContextMenuDemo({ selectedItem, onChooseItem }) {
  return (
    <DemoSection>
      <SmallHeading>Context Menu example (made with Portal)</SmallHeading>
      <ContextMenu
        renderCaller={({ handleShowMenu }) => (
          <Flex>
            <ContextMenuCaller
              onContextMenu={(event) => {
                event.preventDefault();
                handleShowMenu(event);
              }}
            >
              Right Click to choose framework
            </ContextMenuCaller>
            <SmallHeading>{selectedItem}</SmallHeading>
          </Flex>
        )}
      >
        {({ handleHideMenu }) => (
          <StyledList>
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
          </StyledList>
        )}
      </ContextMenu>
    </DemoSection>
  );
}

ContextMenuDemo.propTypes = {
  onChooseItem: func,
  selectedItem: string
};
