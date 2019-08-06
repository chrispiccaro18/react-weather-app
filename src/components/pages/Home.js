import React from 'react';
import SearchForm from '../search/SearchForm';
import AllForecasts from '../../containers/forecasts/AllForecasts';

export default function Home() {

  return (
    <main>
      <SearchForm />
      <AllForecasts />
    </main>
  );
}
