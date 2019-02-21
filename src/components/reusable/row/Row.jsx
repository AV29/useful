import React from 'react';
import { node, string } from 'prop-types';
import { StyledLabel } from './styles';
import { FlexRow } from '../../../styles/styles';

const Row = ({ label, children }) => {
  return (
    <div>
      <StyledLabel className="label">
        <hr/>
        {label && <label>{label}</label>}
        <hr/>
      </StyledLabel>
      <FlexRow>{children}</FlexRow>
    </div>
  );
};

Row.propTypes = {
  children: node,
  label: string
};

export default Row;
