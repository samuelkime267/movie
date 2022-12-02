import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const searchSubmit = function (searchValue) {
  if (searchValue === '') return;
};

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <form className="form-container" onSubmit={() => searchSubmit(searchValue)}>
      <input
        type="search"
        placeholder="Search Movie"
        className="search-input bgLess"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <button className="bgLess search-icon-btn">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      </button>
    </form>
  );
};

export default Search;
