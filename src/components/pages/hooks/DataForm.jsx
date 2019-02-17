import React, { useReducer } from 'react';
import { StyledEditForm, StyledInfoSection } from './styles';
import Row from '../../reusable/row/Row';
import Input from '../../reusable/input/Input';
import Button from '../../reusable/button/Button';
import ageReducer from './ageReducer';
import useFormValue from './custom-hooks/useFormValue';

function DataForm() {

  const name = useFormValue('Anton');
  const surname = useFormValue('Vlasik');

  const [state, dispatch] = useReducer(ageReducer.reducer, ageReducer.initialState);

  function handleMakeOlder() {
    dispatch({ type: 'MAKE_OLDER' });
  }

  function handleMakeYounger() {
    dispatch({ type: 'MAKE_YOUNGER' });
  }

  function handleSetAge({ target: { value } }) {
    const age = parseInt(value);
    dispatch({ type: 'SET_AGE', payload: { age } });
  }

  return (
    <StyledEditForm>
      <StyledInfoSection>Name: {name.value}</StyledInfoSection>
      <StyledInfoSection>Surname: {surname.value}</StyledInfoSection>
      <StyledInfoSection>Age: {state.age}</StyledInfoSection>
      <Row label="Name">
        <Input {...name}/>
      </Row>
      <Row label="Surname">
        <Input {...surname}/>
      </Row>
      <Row label="Age">
        <Button onClick={handleMakeYounger}>-</Button>
        <Input onChange={handleSetAge} value={state.age}/>
        <Button onClick={handleMakeOlder}>+</Button>
      </Row>
    </StyledEditForm>
  );
}

export default DataForm;
