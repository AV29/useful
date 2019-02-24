import React, { useState, Fragment } from 'react';
import { DemoSection, Heading, GridWrapper, SmallHeading, List } from '../../../styles/styles';
import PropTypes from 'prop-types';
import Clock from './Clock';
import DynamicTimer from './DynamicTimer';
import DataForm from './DataForm';
import Button from '../../reusable/controls/button/Button';
import { HooksContextMenu2, HooksContextMenu } from '../../reusable/context-menu/ContextMenu';
import useContextMenu from './custom-hooks/useContextMenu';
import { StyledContextMenuDemoTarget } from './styles';

const items = [{ id: '1', text: 'Angular' }, { id: '2', text: 'React' }, { id: '3', text: 'Vue' }];

function Hooks (props) {
  const [selectedItem, setSelectedItem] = useState('React');
  const [contextMenuCallerRef, coords, handleClose] = useContextMenu();

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
          <StyledContextMenuDemoTarget ref={contextMenuCallerRef}>
            Right Click Here (Composable)
          </StyledContextMenuDemoTarget>

          <HooksContextMenu handleClose={handleClose} coords={coords}>
            <List>
              <Button onClick={handleClose}>Close</Button>
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
          </HooksContextMenu>

          <SmallHeading>{selectedItem}</SmallHeading>

          <HooksContextMenu2
            closeOnClickInside
            target={
              <StyledContextMenuDemoTarget>
                Right Click Here (Configurable)
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
          </HooksContextMenu2>
        </DemoSection>
      </GridWrapper>
    </Fragment>
  );
}

Hooks.propTypes = {
  name: PropTypes.string
};

export default Hooks;
