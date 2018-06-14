//@flow
import React from 'react';
import View from './view';
import Master from '../master';

export default {
  router: {
    path: '/Filter',
    component: () => (
      <Master>
        <View />
      </Master>
    )
  }
};
