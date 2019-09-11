import React, { useState } from 'react';
import Input from '../../reusable/controls/input/Input';
import Button from '../../reusable/controls/button/Button';
import { FlexColumn } from '../../../styles/styles';
import useDataFetch from '../../../hooks/useDataFetch';

function UseDataAPI () {
  const url = 'http://hn.algolia.com/api/v1/search?query=';
  const initialQuery = 'UX';
  const { data, isLoading, goGetIT, error } = useDataFetch(`${url}${initialQuery}`);
  const [query, setQuery] = useState(initialQuery);

  return (
    <FlexColumn>
      <form onSubmit={(event) => {
        event.preventDefault();
        goGetIT(`${url}${query}`);
      }}
      >
        <Button type="submit"> Search </Button>
        <Input
          value={query}
          onChange={({ target: { value } }) => {
            setQuery(value);
          }}
        />
      </form>
      {isLoading ?
        'Loading...' :
        <ul>
          {
            data.map(({ url, title, objectID }) => {
              return (
                <li key={objectID}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </a>
                </li>
              );
            })
          }
        </ul>
      }
      {error}
    </FlexColumn>
  );
}

export default UseDataAPI;
//http://hn.algolia.com/api/v1/search?query={props.id}
