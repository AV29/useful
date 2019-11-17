import React, { useState, useRef, useEffect } from 'react';
import { bool, oneOf } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { generateMatrix, getSpiralLoop } from '../../../utilities/spiralWalkThrough';
import Button from '../../reusable/controls/button/Button';
import Input from '../../reusable/controls/input/Input';
import useFormValue from '../../../hooks/useFormValue';
import { FlexRow, FlexColumn } from '../../../styles/styles';
import { StyledMatrix, StyledMatrixElement } from './styles.js';


const config = {
  speed: {
    blazing: 10,
    fast: 50,
    regular: 150,
    slow: 300
  },
  lowerBound: 0,
  upperBound: 1,
  fontSize: 14
};

const getWidth = colNumber => colNumber * config.upperBound.toString().length * (config.fontSize + 10);
const getHeight = rowNumber => rowNumber * (config.fontSize + 10);

function Spiral (props) {
  const { t } = useTranslation('common');
  const spiralData = useRef([]);
  const [renderData, setRenderData] = useState([]);
  const [isDrawing, draw] = useState(false);
  const columns = useFormValue(2);
  const rows = useFormValue(2);
  const [matrixStyles, setMatrixStyles] = useState({
    height: getHeight(rows.value),
    width: getWidth(columns.value)
  });

  const handleGenerate = () => {
    spiralData.current = getSpiralLoop(
      generateMatrix(
        Number(rows.value),
        Number(columns.value),
        { from: config.lowerBound, to: config.upperBound }
      )
    );
    setRenderData([]);
    setMatrixStyles({ height: getHeight(rows.value), width: getWidth(columns.value) });
    draw(true);
  };

  useEffect(() => {
    let id;
    if (isDrawing) {
      let counter = 0;
      id = setInterval(() => {
        setRenderData(data => data.concat(spiralData.current[counter]));
        counter === spiralData.current.length - 1 ?
          draw(false) :
          counter += 1;
      }, config.speed[props.speed] || config.speed.regular);
    }
    return () => clearInterval(id);
  }, [isDrawing]);

  return (
    <FlexColumn>
      <FlexRow>
        <Input type="number" label={t('rows')} {...rows} />
        <Input type="number" label={t('columns')} {...columns} />
      </FlexRow>
      <Button disabled={isDrawing} onClick={handleGenerate}>{isDrawing ? t('drawing') : t('draw')}</Button>
      <StyledMatrix style={matrixStyles}>
        {renderData.map(({ x, y, element }, index) => (
          <span
            key={index}
            style={{
              top: getHeight(x),
              left: getWidth(y),
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

Spiral.propsTypes = {
  clockwise: bool,
  speed: oneOf(["fast", "slow", "regular", "blazing"])
};

Spiral.defaultProps = {
  clockwise: true,
  speed: "regular"
};

export default Spiral;
