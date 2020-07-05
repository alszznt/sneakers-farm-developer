import React, { Component } from 'react';

import SneakersList from '../sneakers-list';
import { SneakersFarmProvider } from '../sneakers-farm-service-context';
import SneakerPage from '../sneaker-page';
import Header from '../header';

import SneakersFarmService from '../../services/sneakers-farm-service';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './app.css';

export default class App extends Component {

  state = {
    sneakersFarmService: new SneakersFarmService(),
    searchResult: []
  };

  onSearch = ( searchResult ) => {
    this.setState({ searchResult });
  }

  render(){

    const { sneakersFarmService, searchResult } = this.state;

    return (
      <SneakersFarmProvider value = { sneakersFarmService } >
          <Router>
              <div className = "app">
                  <Header sneakersFarmService = { sneakersFarmService }
                          onSearch = { this.onSearch } />
                  <Route path = "/:id?"
                         render = { () => (
                           <SneakersList searchResult = { searchResult } />
                         )}
                  />
                 <Route path = "/sneaker-page/:id?"
                        render = { () => (
                          <SneakerPage sneakersFarmService = { sneakersFarmService } />
                        )}
                  />
              </div>
          </Router>
      </SneakersFarmProvider>
    );
  };
};
