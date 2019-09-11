import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../reusable/controls/input/Input';
import Button from '../../reusable/controls/button/Button';
import { FlexColumn } from '../../../styles/styles';
import { StyledLinkList } from './styles';
import useDataFetch from '../../../hooks/useDataFetch';

const getList = (data, t) => {
  return data.length > 0 ?
    <StyledLinkList>
      {
        data.map(({ url, title, objectID }) => (
          <li key={objectID}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </li>
        ))
      }
    </StyledLinkList> :
    <div>{t('noData')}</div>;
};

const url = 'http://hn.algolia.com/api/v1/search?query=';
const initialQuery = 'UX';

function UseDataAPI () {
  const [{ data, isLoading, error }, goGetIT] = useDataFetch(`${url}${initialQuery}`);
  const [query, setQuery] = useState(initialQuery);
  const { t } = useTranslation('common');

  return (
    <FlexColumn>
      <form
        style={{ display: 'flex' }}
        onSubmit={(event) => {
          event.preventDefault();
          goGetIT(`${url}${query}`);
        }}
      >
        <Input
          value={query}
          onChange={({ target: { value } }) => {
            setQuery(value);
          }}
        />
        <Button type="submit"> {t('search')} </Button>
      </form>
      {isLoading ? t('loading') : getList(data, t)}
      {error}
    </FlexColumn>
  );
}

export default UseDataAPI;
