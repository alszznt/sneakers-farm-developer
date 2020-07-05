import React from 'react';
import SneakersList from '../sneakers-list';
import SneakerBlock from '../sneaker-block';

import { withData, withSneakersFarmService, compose, withChildFunction } from '../hoc-helpers';

const mapSearchMethodToProps = (sneakersFarmService) => {
  return {
    getData: sneakersFarmService.getSearchSneakers('f')
  };
};

const SearchList = compose(
                      withSneakersFarmService(mapSearchMethodToProps),
                      withData
                    )(SneakersList);

export {
  SearchList
};
