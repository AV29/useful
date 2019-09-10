import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from '../../reusable/controls/input/Input';
import { FlexColumn } from '../../../styles/styles';
import { useTranslation } from 'react-i18next';

function UseDataAPI () {
  const { t } = useTranslation('common');
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');

  useEffect(() => {
    axios(`http://hn.algolia.com/api/v1/search?query=${query}`).then(({ data }) => {
      setData(data);
    });
  }, [query]);

  return (
    <FlexColumn>
      <Input
        id="query"
        label={t('query')}
        value={query}
        onChange={event => setQuery(event.target.value)}
        style={{ textAlign: 'center' }}
      />
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </FlexColumn>
  );
}

export default UseDataAPI;
