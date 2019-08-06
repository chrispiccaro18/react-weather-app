import React from 'react';
import SearchForm from './search/SearchForm';

export default function App() {
  return <SearchForm onSubmit={submitFunc}></SearchForm>;
}

const submitFunc = zipCode => {
  console.log(zipCode);
}
