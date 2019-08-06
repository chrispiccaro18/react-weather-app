import React from 'react';
import './Home.css';
import SearchForm from '../search/SearchForm';
import AllForecasts from '../../containers/forecasts/AllForecasts';
import Header from '../Header';

export default function Home() {

  return (
    <main>
      <Header />
      <SearchForm />
      <AllForecasts />
    </main>
  );
}
