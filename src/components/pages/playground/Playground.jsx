import React from 'react';
import NavMenu from './NavMenu/NavMenu';
import CheckBox from '../../reusable/controls/checkbox/CheckBox';
import items from './items';
import styles from './Playground.less';

function Playground () {
  const [isVertical, setIsVertical] = React.useState(true);
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [isAccordion, setIsAccordion] = React.useState(false);
  return (
    <div className={styles.playgroundWrapper}>
      <div>
        <CheckBox
          id='checkbox-set-horizontal'
          label='Horizontal'
          onChange={() => setIsVertical(state => !state)}
          checked={!isVertical}
          disabled={isMinimized}
        />
        <CheckBox
          id='checkbox-set-minimize'
          label='Minimized'
          onChange={() => setIsMinimized(state => !state)}
          checked={isMinimized}
          disabled={!isVertical}
        />
        <CheckBox
          id='checkbox-set-accordion'
          label='Accordion'
          onChange={() => setIsAccordion(state => !state)}
          disabled={!isVertical}
          checked={isAccordion}
        />
      </div>
      <NavMenu
        items={items}
        isVertical={isVertical}
        isMinimized={isMinimized}
        isAccordion={isAccordion}
      />
    </div>
  );
}

export default Playground;
