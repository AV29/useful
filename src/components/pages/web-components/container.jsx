import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { string, func } from 'prop-types';
import Dropdown from './Dropdown';
import { isChrome, isFirefox } from '../../../utilities/browserDefine';
import { GridWrapper, Heading, DemoSection } from '../../../styles/styles';

const options = {
  option1: { label: 'Option 1' },
  option2: { label: 'Option 2' },
};

function WebComponents (props) {
  const { t } = useTranslation('common');
  const [dropDownLabel, setDropDownLabel] = useState('option1');
  return (
    <Fragment>
      <Heading>{t(props.nameKey)}</Heading>
      <GridWrapper>
        {
          isChrome || isFirefox ?
            <DemoSection>
              <Dropdown
                label={dropDownLabel}
                onChange={setDropDownLabel}
                options={options}
              />
            </DemoSection> :
            <Heading>{t('webComponentsNotSupported')}</Heading>
        }
      </GridWrapper>
    </Fragment>
  );
}

WebComponents.propTypes = {
  nameKey: string,
  t: func
};

export default WebComponents;
