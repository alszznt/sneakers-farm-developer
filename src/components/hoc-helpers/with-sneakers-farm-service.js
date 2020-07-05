import React from 'react';

import { SneakersFarmConsumer } from '../sneakers-farm-service-context';

const withSneakersFarmService = (mapMethodsToProps) => (Wrapped) => {

  return (props) => {
    return (
      <SneakersFarmConsumer>
        {
          (sneakersFarmService) => {

            const serviceProps = mapMethodsToProps(sneakersFarmService)

            return (
              <Wrapped { ...props } { ...serviceProps } />
            );
          }
        }
      </SneakersFarmConsumer>
    );
  };
};

export default withSneakersFarmService;
