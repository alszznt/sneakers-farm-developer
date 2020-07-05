import React, { Component } from 'react';

import PriceListItem from '../price-list-item';

import './price-list.css';

export default class PriceList extends Component {

  selectedSize = (size, arr) => {
    console.log(arr);
    const value = arr.map(( data ) => {
      if ( data.size === size ){
        return (
          data.prices.map(( item ) => {

            const { price_id } = item;

            return (
              <PriceListItem key = { price_id }
                             props = { item } >
                  { item.shop }
              </PriceListItem>
            );
          })
        );
      }
    });

    return value;

  }

  render(){

    const { prices } = this.props;

    const content = this.selectedSize(5, prices);

    return (
      <div className = "price-list" >
          { content }
      </div>
    );
  }
};

PriceList.defaultProps = {
  prices: []
};
