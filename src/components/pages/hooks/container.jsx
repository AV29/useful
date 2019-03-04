import React, { useState, Fragment } from 'react';
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

const items = [{ id: '1', text: 'Hooks' }, { id: '2', text: 'HOCs' }, { id: '3', text: 'FACCs' }];

function Hooks(props) {
  const [selectedItem, setSelectedItem] = useState('React');
  const [contextMenuCallerRef, coords, handleClose] = useContextMenu();
  const [hoverRef, isHovering] = useMouseHover();
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
                    onClick={() => setSelectedItem(text)}
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
        <DemoSection>
          <Section>
            <SmallHeading ref={hoverRef}>Hover here to call tooltip</SmallHeading>
          </Section>
          {
            isHovering &&
            <Tooltip targetRef={hoverRef}>
              Tooltip
            </Tooltip>
          }
        </DemoSection>
      </GridWrapper>
    </Fragment>
  );
}

Hooks.propTypes = {
  name: string
};

export default Hooks;
