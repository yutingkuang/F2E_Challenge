//@flow
import React from 'react';
import View from './view';
import Master from '../master';
import Reducer from './fetchApi/reducer';

export default {
  router: {
    path: '/Filter',
    component: () => (
      <Master>
        <View />
      </Master>
    )
  },
  reducer: Reducer
};
