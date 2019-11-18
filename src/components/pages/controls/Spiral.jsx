import React, { useState, useRef } from 'react';
import { bool, oneOf } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { generateMatrix, getSpiralLoop } from '../../../utilities/spiralWalkThrough';
import Button from '../../reusable/controls/button/Button';
import Input from '../../reusable/controls/input/Input';
import useFormValue from '../../../hooks/useFormValue';
import useDynamicInterval from '../../../hooks/useDynamicInterval';
import { FlexRow, FlexColumn } from '../../../styles/styles';
import { StyledMatrix, SpiralSpeedSlider } from './styles.js';

const config = Object.freeze({
  speeds: [200, 250, 100, 50],
  initialSpeed: 3,
  lowerBound: 0,
  upperBound: 1,
  fontSize: 14,
  offset: 10,
  rows: 10,
  columns: 10,
  maxRows: 10,
  maxColumns: 25
});

const getWidth = colCount => colCount * config.upperBound.toString().length * (config.fontSize + config.offset) - config.offset;
const getHeight = rowCount => rowCount * (config.fontSize + config.offset) - config.offset;

function Spiral () {
  const { t } = useTranslation('common');
  const spiralData = useRef([]);
  const counter = useRef(0);
  const [renderData, setRenderData] = useState([]);
  const [isDrawing, draw] = useState(false);
  const [speed, setSpeed] = useState(config.initialSpeed);
  const columns = useFormValue(config.columns);
  const rows = useFormValue(config.rows);
  const [matrixStyles, setMatrixStyles] = useState({
    height: getHeight(rows.value),
    width: getWidth(columns.value)
  });

  const isRowsInputInvalid = rows.value > config.maxRows;
  const isColumnsInputInvalid = columns.value > config.maxColumns;

  const handleGenerate = () => {
    spiralData.current = getSpiralLoop(
      generateMatrix(
        Number(rows.value),
        Number(columns.value),
        { from: config.lowerBound, to: config.upperBound }
      )
    );
    setRenderData([]);
    counter.current = 0;
    setMatrixStyles({ height: getHeight(rows.value), width: getWidth(columns.value) });
    draw(true);
  };

  useDynamicInterval(() => {
    setRenderData(data => data.concat(spiralData.current[counter.current]));
    counter.current === spiralData.current.length - 1 ?
      draw(false) :
      counter.current += 1;
  }, isDrawing ? config.speeds[speed] : null);

  return (
    <FlexColumn>
      <FlexRow>
        <Input
          type="number"
          label={t('rows')}
          validate={() => isRowsInputInvalid && t('spiralInputInValid', { max: config.maxRows })}
          {...rows}
        />
        <Input
          type="number"
          label={t('columns')}
          validate={() => isColumnsInputInvalid && t('spiralInputInValid', { max: config.maxColumns })}
          {...columns}
        />
        <Button
          style={{ marginBottom: 0, width: 100 }}
          disabled={isDrawing || isRowsInputInvalid || isColumnsInputInvalid}
          onClick={handleGenerate}
        >
          {isDrawing ? t('drawing') : t('draw')}
        </Button>
      </FlexRow>
      <SpiralSpeedSlider
        label={t('speed')}
        max={4}
        value={speed}
        onChange={setSpeed}
      />
      <StyledMatrix style={matrixStyles}>
        {renderData.map(({ x, y, element }, index) => (
          <span
            key={index}
            style={{
              top: getHeight(x) + config.offset,
              left: getWidth(y) + config.offset,
              fontSize: config.fontSize,
              lineHeight: `${config.fontSize}px`
            }}
          >
            {element}
          </span>
        ))}
      </StyledMatrix>
    </FlexColumn>
  );
}

export default Spiral;
