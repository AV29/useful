import React, { useState, Fragment } from 'react';
import { DemoSection, Heading, GridWrapper, SmallHeading, List } from '../../../styles/styles';
import PropTypes from 'prop-types';
import Clock from './Clock';
import DynamicTimer from './DynamicTimer';
import DataForm from './DataForm';
import { HookContextMenu } from '../../reusable/context-menu/ContextMenu';
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
          <HookContextMenu
            target={<StyledContextMenuDemoTarget>Right Click Here to call context menu</StyledContextMenuDemoTarget>}
          >
            <List>
              {
                items.map(({ text, id }) => (
                  <li
                    key={id}
                    onMouseDown={() => {
                      text !== selectedItem && setSelectedItem(text);
                    }}
                  >
                    {text}
                  </li>
                ))
              }
            </List>
          </HookContextMenu>
          <SmallHeading>{selectedItem}</SmallHeading>
        </DemoSection>
      </GridWrapper>
    </Fragment>
  );
}

Hooks.propTypes = {
  name: PropTypes.string
};

export default Hooks;
