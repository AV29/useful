import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { string, shape, func } from 'prop-types';
import { FlexRow, FlexColumn, Heading, SmallHeading, PaddedBlock, List } from '../../../styles/styles';
import routesConfig from '../../../routing/routesConfig';

function About (props) {
  const { t } = useTranslation('common');
  return (
    <Fragment>
      <FlexRow><Heading>{t(props.nameKey)}</Heading></FlexRow>
      <FlexColumn align="center">
        <SmallHeading>{t('aboutHeaderCap')}</SmallHeading>
        <SmallHeading>{t('aboutHeader_1')}</SmallHeading>
        <SmallHeading>{t('aboutHeader_2')}</SmallHeading>
        <PaddedBlock top={50}>
          <SmallHeading>{t('twoMainSections')}</SmallHeading>
          <List>
            {
              routesConfig
                .filter(({ descriptionKey }) => !!descriptionKey)
                .map(({ descriptionKey, path, id }) => (
                  <li
                    key={id}
                    onClick={() => props.history.push(path)}
                  >
                    {t(descriptionKey)}
                  </li>
                ))
            }
          </List>
        </PaddedBlock>
        <SmallHeading>{t('specificThingsList')}</SmallHeading>
      </FlexColumn>
    </Fragment>
  );
}

About.propTypes = {
  nameKey: string,
  history: shape({
    push: func
  })
};

export default About;
