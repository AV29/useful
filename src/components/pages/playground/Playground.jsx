import React from 'react';
import NavMenu from './NavMenu/NavMenu';
import CheckBox from '../../reusable/controls/checkbox/CheckBox';
import Input from '../../reusable/controls/input/Input';
import items from './items';
import styles from './Playground.less';

function Playground () {
  const [isVertical, setIsVertical] = React.useState(true);
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [isAccordion, setIsAccordion] = React.useState(false);

  const [fontColor, setFontColor] = React.useState('#ffffff');
  const [borderColor, setBorderColor] = React.useState('#00ab4e');
  const [backgroundColor, setBackgroundColor] = React.useState('#263a4c');
  const [fontSize, setFontSize] = React.useState(12);
  const [isItalic, setIsItalic] = React.useState(false);
  const [selectedBgColor, setSelectedBGColor] = React.useState('#ffffff');
  const [selectedOpacity, setSelectedOpacity] = React.useState(5);

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

      <div className={styles.label}>Background</div>
      <div className={styles.flexCentered}>
        {['#263a4c', '#ffffff', '#288dc8'].map((color, index) => (
          <div key={index} className={[styles.colorMarker, color === backgroundColor ? styles.isActive : ''].join(' ')} style={{ backgroundColor: color }} onClick={() => setBackgroundColor(color)} />
        ))}
      </div>

      <div className={styles.label}>Border</div>
      <div className={styles.flexCentered}>
        {['#00ab4e', '#dddddd', 'purple', 'yellow', 'burlywood'].map((color, index) => (
          <div key={index} className={[styles.colorMarker, color === borderColor ? styles.isActive : ''].join(' ')} style={{ backgroundColor: color }} onClick={() => setBorderColor(color)} />
        ))}
      </div>

      <div className={styles.label}>Font Color</div>
      <div className={styles.flexCentered}>
        {['#288dc8', '#ffffff', '#000000'].map((color, index) => (
          <div key={index} className={[styles.colorMarker, color === fontColor ? styles.isActive : ''].join(' ')} style={{ backgroundColor: color }} onClick={() => setFontColor(color)}/>
        ))}
      </div>

      <Input
        label='Font Size'
        onChange={({ target: { value } }) => setFontSize(Number(value))}
        value={fontSize}
        type="number"
        className={styles.input}
      />

      <div className={styles.label}>Selected Background Color</div>
      <div className={styles.flexCentered}>
        {['#ffffff', '#000000'].map((color, index) => (
          <div key={index} className={[styles.colorMarker, color === selectedBgColor ? styles.isActive : ''].join(' ')} style={{ backgroundColor: color }} onClick={() => setSelectedBGColor(color)}/>
        ))}
      </div>

      <Input
        label='Selected Opacity'
        onChange={({ target: { value } }) => setSelectedOpacity(Number(value))}
        value={selectedOpacity}
        type="number"
        className={styles.input}
      />

      <CheckBox
        id='checkbox-set-italic'
        label='Italic Font'
        className={styles.input}
        onChange={() => setIsItalic(state => !state)}
        checked={isItalic}
      />

      <div className={styles.menuWrapper}>
        <NavMenu
          items={items}
          theme={{
            nav: {
              selectedOpacity,
              selectedBgColor,
              fontStyle: isItalic ? 'italic' : 'normal',
              fontSize,
              fontColor,
              borderColor,
              backgroundColor
            }
          }}
          isVertical={isVertical}
          isMinimized={isMinimized}
          isAccordion={isAccordion}
        />
      </div>
    </div>
  );
}

export default Playground;
