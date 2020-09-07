import React, { useState } from 'react';
import axios from 'axios';
import { BehaviorSubject, from, of } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, mergeMap, delay, tap, repeat, map } from 'rxjs/operators';
import useObservable from '../../../hooks/useObservable';
import Input from '../../reusable/controls/input/Input';

const getPokemonByName = (name) => {
  return axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
    .then(result => result.data.results.filter(pokemon => pokemon.name.includes(name)));
};

const delayRequest = () => of(new Date()).pipe(delay(1000));

const pollObservable = of({}).pipe(
  mergeMap(delayRequest),
  tap(console.log), // eslint-disable-line
  map(res => res.toString()),
  delay(2000),
  repeat()
);

// eslint-disable-next-line
const numbersObservable = from([1, 2, 3]).pipe(
  mergeMap(val => from([val]).pipe(delay(1000 * val)))
);

const searchSubject = new BehaviorSubject('');

const searchResultsObservable = searchSubject.pipe(
  filter(val => val.length > 1),
  debounceTime(500),
  distinctUntilChanged(),
  mergeMap(val => from(getPokemonByName(val)))
);

function Playground () {
  const [search, setSearch] = useState('');
  // const [numbers, setNumbers] = useState([]);
  const [results, setResults] = useState([]);
  const [polledData, setPolledData] = useState('');

  // useObservable(numbersObservable, setNumbers);
  useObservable(pollObservable, setPolledData);
  useObservable(searchResultsObservable, setResults);

  const handleSearchChange = (event) => {
    const newName = event.target.value;
    setSearch(newName);
    searchSubject.next(newName);
  };

  return (
    <>
      <Input value={search} onChange={handleSearchChange}/>
      {polledData}
      {results.map(pockemon => <div key={pockemon.name}>{pockemon.name}</div>)}
    </>
  );
}

export default Playground;
