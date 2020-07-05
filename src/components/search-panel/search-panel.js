import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: '',
    searchResult: [],
    error: false
  };

  onSneakersLoaded = ( searchResult ) => {
    this.props.onSearch( searchResult );
  }

  onError = (err) => {
    this.setState({
      error: true
    });
  };

  getSearchSneakers = (search_request) =>{
    this.props.sneakersFarmService
      .getSearchSneakers(search_request)
      .then(this.onSneakersLoaded)
      .catch(this.onError);
  }

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.getSearchSneakers( term );
  };

  render(){

    return (
      <div className = "search-panel">
          <input className = "search-input"
                 type = "text"
                 placeholder = "Find any sneaker, lineup, colorway…"
                 onChange = { this.onSearchChange } >
          </input>
      </div>
    );
  }
};
