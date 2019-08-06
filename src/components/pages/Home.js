import React from 'react';
import SearchForm from '../search/SearchForm';
import { updateZipCode } from '../../actions/zipCodeActions';

export default function Home() {

  return (
    <main>
      <SearchForm />
    </main>
  );
}
