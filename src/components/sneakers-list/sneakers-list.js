import React from 'react';

import { withRouter } from 'react-router-dom';

import SneakerBlock from '../sneaker-block';

import './sneakers-list.css';

const SneakersList = (props) => {

  const { data, onItemSelected, searchResult } = props;

  const sneakers = searchResult.map(( data ) => {
    const { id } = data;
    return (
      <SneakerBlock key = { id }
                    props = { data } />
    );
  });

  return (
    <div className = "sneakers-list" >
        { sneakers }
    </div>
  );
};

export default withRouter(SneakersList);
