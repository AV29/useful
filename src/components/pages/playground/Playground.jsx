import React from 'react';
import NavMenu from './NavMenu/NavMenu';
import Button from '../../reusable/controls/button/Button';
import items from './items';

function Playground () {
  const [isVertical, setIsVertical] = React.useState(true);
  return (
    <>
      <Button disabled={isVertical} onClick={() => setIsVertical(true)}>Set Vertical</Button>
      <Button disabled={!isVertical} onClick={() => setIsVertical(false)}>Set Horizontal</Button>
      <NavMenu items={items} isVertical={isVertical}/>
    </>
  );
}

export default Playground;
