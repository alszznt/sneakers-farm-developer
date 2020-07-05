import React from 'react';

import './sneaker-block.css';

const SneakerBlock = ({ props: { id, model, image,
                        min: { price, shop } }
                      }) => {

  return (
    <div className = "sneaker-block" >
        <img className = "sneaker-block-image" src = { image } alt = { model } />
        <div className = "sneaker-block-name" >{ model }</div>
        <div className = "sneaker-block-price-group" >
            <div className = "sneaker-block-site-icon" />
            <div className = "sneaker-block-price" >{ price }</div>
        </div>
    </div>
  );
};

export default SneakerBlock;
