import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import GreenButton from '../green-button';
import PriceList from '../price-list';

import './sneaker-page.css';

class SneakerPage extends Component {

  state = {
    sneakerInfo: {}
  }

  componentDidMount() {
    this.getSneaker(this.props.match.params);
  }

  onSneakerLoaded = ( sneakerInfo ) => {
    this.setState({ sneakerInfo });
  }

  onError = (err) => {
    this.setState({
      error: true
    });
  };

  getSneaker = ({id}) => {
    this.props.sneakersFarmService
      .getSneaker(id)
      .then(this.onSneakerLoaded)
      .catch(this.onError);
  }

  render(){

    const { sneakerInfo } = this.state;
    const { image, prices } = sneakerInfo;

    return (
      <div className = "sneaker-page" >
          <img className = "sneaker-page-sneaker-image" src = { image } />
          <div className = "sneaker-page-sneaker-name" alt = "name">Yeezy 350 v2 ‘True Form’ (non reflective)</div>
          <div className = "sneaker-page-button-group" >
              <GreenButton value = "Add to schelf" />
              <GreenButton value = "Add to favs" />
          </div>
          <PriceList prices = { prices } />
      </div>
    );
  }
};

export default withRouter(SneakerPage);
