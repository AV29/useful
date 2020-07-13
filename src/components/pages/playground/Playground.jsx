import React from 'react';
import NavMenu from './NavMenu/NavMenu';
import Button from '../../reusable/controls/button/Button';
import items from './items';
import styles from './Playground.less';

function Playground () {
  const [isVertical, setIsVertical] = React.useState(true);
  const [isMinimized, setIsMinimized] = React.useState(false);
  return (
    <div className={styles.playgroundWrapper}>
      <div>
        <Button disabled={isVertical} onClick={() => setIsVertical(true)}>Set Vertical</Button>
        <Button disabled={!isVertical || isMinimized} onClick={() => setIsVertical(false)}>Set Horizontal</Button>
        <Button disabled={!isVertical || isMinimized} onClick={() => setIsMinimized(true)}>Minimize</Button>
        <Button disabled={!isVertical || !isMinimized} onClick={() => setIsMinimized(false)}>Maximize</Button>
      </div>
      <NavMenu
        items={items}
        isVertical={isVertical}
        isMinimized={isMinimized}
      />
    </div>
  );
}

export default Playground;
