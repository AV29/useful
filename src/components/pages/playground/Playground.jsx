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
  const [withRippleEffect, setWithRippleEffect] = React.useState(true);

  const [fontColor, setFontColor] = React.useState('#288dc8');
  const [borderColor, setBorderColor] = React.useState('#dddddd');
  const [backgroundColor, setBackgroundColor] = React.useState('#ffffff');
  const [fontSize, setFontSize] = React.useState(12);
  const [isItalic, setIsItalic] = React.useState(false);
  const [iconSize, setIconSize] = React.useState(10);

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
        <CheckBox
          id='checkbox-set-with-ripple'
          label='Ripple Effect'
          onChange={() => setWithRippleEffect(state => !state)}
          checked={withRippleEffect}
        />
      </div>

      <div className={styles.label}>Background</div>
      <div className={styles.flexCentered}>
        {['#ffffff', 'tomato', 'skyblue', 'yellowgreen'].map((color, index) => (
          <div key={index} className={[styles.colorMarker, color === backgroundColor ? styles.isActive : ''].join(' ')} style={{ backgroundColor: color }} onClick={() => setBackgroundColor(color)} />
        ))}
      </div>

      <div className={styles.label}>Border</div>
      <div className={styles.flexCentered}>
        {['#dddddd', 'purple', 'yellow', 'burlywood'].map((color, index) => (
          <div key={index} className={[styles.colorMarker, color === borderColor ? styles.isActive : ''].join(' ')} style={{ backgroundColor: color }} onClick={() => setBorderColor(color)} />
        ))}
      </div>

      <div className={styles.label}>Font Color</div>
      <div className={styles.flexCentered}>
        {['#288dc8', 'white', 'black', 'yellow'].map((color, index) => (
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

      <CheckBox
        id='checkbox-set-italic'
        label='Italic Font'
        className={styles.input}
        onChange={() => setIsItalic(state => !state)}
        checked={isItalic}
      />

      <div className={styles.label}>Icon Size</div>
      <div className={styles.flexCentered}>
        {[{ label: 'small', value: 10 }, { label: 'medium', value: 15 }, { label: 'large', value: 20 }].map(({label, value}, index) => (
          <div key={index} className={[styles.iconSizeLabel, value === iconSize ? styles.isActive : ''].join(' ')} onClick={() => setIconSize(value)}>{label}</div>
        ))}
      </div>

      <div className={styles.menuWrapper}>
        <NavMenu
          items={items}
          theme={{
            nav: {
              iconSize,
              fontStyle: isItalic ? 'italic' : 'normal',
              fontSize,
              fontColor,
              borderColor,
              shadowColor: '#aaaaaa',
              backgroundColor
            }
          }}
          disableRipple={!withRippleEffect}
          isVertical={isVertical}
          isMinimized={isMinimized}
          isAccordion={isAccordion}
        />
      </div>
    </div>
  );
}

export default Playground;
