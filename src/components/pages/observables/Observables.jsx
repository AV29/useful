import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BehaviorSubject, from } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';
import Input from '../../reusable/controls/input/Input';

const getPokemonByName = name => {
  return axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
    .then(result => result.data.results.filter(pokemon => pokemon.name.includes(name)));
};

let searchSubject = new BehaviorSubject('');
let searchResultsObservable = searchSubject.pipe(
  filter(val => val.length > 1),
  debounceTime(500),
  distinctUntilChanged(),
  mergeMap(val => from(getPokemonByName(val)))
);

const useObservable = (observable, setter) => {
  useEffect(() => {
    const subscription = observable.subscribe(result => {
      setter(result);
    });

    return () => subscription.unsubscribe();
  }, [observable, setter]);
};

function Playground () {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useObservable(searchResultsObservable, setResults);

  const handleSearchChange = event => {
    const newName = event.target.value;
    setSearch(newName);
    searchSubject.next(newName);
  };

  return (
    <>
      <Input value={search} onChange={handleSearchChange}/>
      {results.map(pockemon => <div key={pockemon.name}>{pockemon.name}</div>)}
    </>
  );
}

export default Playground;
