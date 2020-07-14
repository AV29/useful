import React from 'react';
import { Drawer, ClickAwayListener } from '@material-ui/core';
import NavMenu from './NavMenu/NavMenu';
import Button from '../../reusable/controls/button/Button';
import CheckBox from '../../reusable/controls/checkbox/CheckBox';
import Input from '../../reusable/controls/input/Input';
import items from './items';
import styles from './Playground.less';

function Playground () {
  const [isTheBuilderOpened, setIsThemeBuilderOpened] = React.useState(false);

  const [isVertical, setIsVertical] = React.useState(true);
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [isAccordion, setIsAccordion] = React.useState(false);

  const [fontColor, setFontColor] = React.useState('#ffffff');
  const [borderColor, setBorderColor] = React.useState('#00ab4e');
  const [backgroundColor, setBackgroundColor] = React.useState('#263a4c');
  const [fontSize, setFontSize] = React.useState(12);
  const [fontStyle, setFontStyle] = React.useState('normal');
  const [selectedBgColor, setSelectedBGColor] = React.useState('#ffffff');
  const [selectedOpacity, setSelectedOpacity] = React.useState(5);
  const [fontWeight, setFontWeight] = React.useState('lighter');
  const [borderWeight, setBorderWeight] = React.useState(3);

  return (
    <div className={styles.playgroundWrapper}>
      <Button onClick={() => setIsThemeBuilderOpened(true)} className={styles.openThemeBuilderButton}>Open Theme Builder</Button>
        <Drawer
          onClose={() => setIsThemeBuilderOpened(false)}
          anchor='right'
          open={isTheBuilderOpened}
          ModalProps={{ BackdropProps: { invisible: true } }}
        >
          <div className={styles.drawer}>
            <div>
              <CheckBox
                id='checkbox-set-horizontal'
                label='Horizontal'
                onChange={() => setIsVertical(state => !state)}
                checked={!isVertical}
                disabled={isMinimized || isAccordion}
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

            <div className={styles.label}>Font Style</div>
            <div className={[styles.flexCentered, styles.fontStyleSwitcher].join(' ')}>
              <div onClick={() => setFontStyle('normal')} className={[styles.fontStyle, fontStyle === 'normal' ? styles.isActiveStyle : ''].join(' ')}>Normal</div>
              <div onClick={() => setFontStyle('italic')} className={[styles.fontStyle, fontStyle === 'italic' ? styles.isActiveStyle : ''].join(' ')} style={{ fontStyle: 'italic' }}>Italic</div>
            </div>

            <div className={styles.label}>Font Weight</div>
            <div className={styles.flexCentered}>
              {['lighter', 'normal', 'bold'].map((weight, index) => (
                <Button key={index} disabled={weight === fontWeight} onClick={() => setFontWeight(weight)}>{weight}</Button>
              ))}
            </div>

            <div className={styles.label}>Border Weight</div>
            <div className={styles.flexCentered}>
              {[{ value: 2, label: 'thin' }, { value: 3, label: 'regular' }, { value: 4, label: 'wide' }].map(({ value, label }, index) => (
                <Button key={index} disabled={value === borderWeight} onClick={() => setBorderWeight(value)}>{label}</Button>
              ))}
            </div>
          </div>
        </Drawer>
      <NavMenu
        items={items}
        isVertical={isVertical}
        isMinimized={isMinimized}
        isAccordion={isAccordion}
        theme={{
          nav: {
            selectedOpacity,
            selectedBgColor,
            fontStyle,
            fontSize,
            fontColor,
            fontWeight,
            borderColor,
            borderWeight,
            backgroundColor
          }
        }}
      />
    </div>
  );
}

export default Playground;
