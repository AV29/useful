import React, { useState, Fragment } from 'react';
import { DemoSection, Heading, GridWrapper, SmallHeading, List } from '../../../styles/styles';
import PropTypes from 'prop-types';
import Clock from './Clock';
import DynamicTimer from './DynamicTimer';
import DataForm from './DataForm';
import Button from '../../reusable/controls/button/Button';
import { MenuXXX } from '../../reusable/context-menu/ContextMenu';
import useContextMenu from './custom-hooks/useContextMenu';
import { StyledContextMenuDemoTarget } from './styles';

const items = [{ id: '1', text: 'Angular' }, { id: '2', text: 'React' }, { id: '3', text: 'Vue' }];

function Hooks (props) {
  const [selectedItem, setSelectedItem] = useState('React');

  return (
    <Fragment>
      <Heading>{props.name}</Heading>
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
          {/*<HookContextMenu
            target={
              <StyledContextMenuDemoTarget>
                Right Click Here to call hooks context menu
              </StyledContextMenuDemoTarget>
            }
          >
            <List>
              {
                items.map(({ text, id }) => (
                  <li
                    key={id}
                    onMouseDown={() => setSelectedItem(text)}
                  >
                    {text}
                  </li>
                ))
              }
            </List>
          </HookContextMenu>*/}

          <SmallHeading>{selectedItem}</SmallHeading>
          <MenuXXX
            target={
              <StyledContextMenuDemoTarget>
                Right Click Here to call another context menu
              </StyledContextMenuDemoTarget>
            }
          >
            <List>
              {
                items.map(({ text, id }) => (
                  <li
                    key={id}
                    onMouseDown={() => setSelectedItem(text)}
                  >
                    {text}
                  </li>
                ))
              }
            </List>
          </MenuXXX>
        </DemoSection>
      </GridWrapper>
    </Fragment>
  );
}

Hooks.propTypes = {
  name: PropTypes.string
};

export default Hooks;
