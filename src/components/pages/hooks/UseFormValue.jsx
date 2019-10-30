import React, { useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledEditForm, StyledInfoSection } from './styles';
import Row from '../../reusable/row/Row';
import Input from '../../reusable/controls/input/Input';
import Button from '../../reusable/controls/button/Button';
import ageReducer from '../../../hooks/ageReducer';
import useFormValue from '../../../hooks/useFormValue';

function UseFormValue () {

  const name = useFormValue('Anton');
  const surname = useFormValue('Vlasik');

  const [state, dispatch] = useReducer(ageReducer.reducer, ageReducer.initialState);

  const { t } = useTranslation('common');

  function handleMakeOlder () {
    dispatch({ type: 'MAKE_OLDER' });
  }

  function handleMakeYounger () {
    dispatch({ type: 'MAKE_YOUNGER' });
  }

  function handleSetAge ({ target: { value } }) {
    const age = parseInt(value);
    dispatch({ type: 'SET_AGE', payload: { age } });
  }

  return (
    <StyledEditForm>
      <StyledInfoSection>Name: {name.value}</StyledInfoSection>
      <StyledInfoSection>Surname: {surname.value}</StyledInfoSection>
      <StyledInfoSection>Age: {state.age}</StyledInfoSection>
      <Row label={t('name')}>
        <Input {...name}/>
      </Row>
      <Row label={t('surname')}>
        <Input {...surname}/>
      </Row>
      <Row label={t('age')}>
        <Button onClick={handleMakeYounger}>-</Button>
        <Input onChange={handleSetAge} value={state.age}/>
        <Button onClick={handleMakeOlder}>+</Button>
      </Row>
    </StyledEditForm>
  );
}

export default UseFormValue;
