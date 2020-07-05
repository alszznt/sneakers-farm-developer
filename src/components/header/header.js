import React from 'react';

import SearchPanel from '../search-panel';

import './header.css';

const Header = ( { sneakersFarmService, onSearch } ) => {

  return (
    <div className = "header">
        <SearchPanel sneakersFarmService = { sneakersFarmService }
                     onSearch = { onSearch }/>
    </div>
  );
};

export default Header;
