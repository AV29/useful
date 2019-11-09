import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledEditForm, StyledInfoSection } from './styles';
import { FlexRow } from '../../../styles/styles';
import Input from '../../reusable/controls/input/Input';
import { birthYear, getCurrentYear } from '../../../utilities/date';
import useFormValue from '../../../hooks/useFormValue';

function UseFormValue () {

  const { t } = useTranslation('common');
  const name = useFormValue('Anton');
  const surname = useFormValue('Vlasik');
  const age = useFormValue(getCurrentYear() - birthYear);

  return (
    <StyledEditForm>
      <StyledInfoSection>{name.value} {surname.value}, {age.value}</StyledInfoSection>
      <FlexRow>
        <Input label={t('name')} {...name} />
        <Input label={t('surname')} {...surname} />
        <Input label={t('age')} type="number" {...age} />
      </FlexRow>
    </StyledEditForm>
  );
}

export default UseFormValue;
