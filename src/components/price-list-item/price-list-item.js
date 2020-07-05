import React, { Component } from 'react';

import './price-list-item.css';

const PriceListItem = ({ props }) => {

  const _imageBase = 'http://sneakers-farm.herokuapp.com/images/'

  const { price, shop } = props;

  return (
    <div className = "price-list-item" >
        <div className = "price-list-item-shop-icon" style = {{ backgroundImage: `url( ${_imageBase}${shop} )` }} />
        <div className = "price-list-item-shop">{ shop }</div>
        <div className = "price-list-item-price">${ price }</div>
    </div>
  );
};

export default PriceListItem;
