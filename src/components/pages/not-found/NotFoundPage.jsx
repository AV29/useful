import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlexRow, Heading } from '../../../styles/styles';

function NotFoundPage () {
  const { t } = useTranslation('common');
  return (
    <FlexRow>
      <Heading>{t('notFound')}</Heading>
    </FlexRow>
  );
}

export default NotFoundPage;
