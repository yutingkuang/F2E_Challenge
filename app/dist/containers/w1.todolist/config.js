//@flow
import React from 'react';
import View from './view';
import Master from '../master';
import reducer from './reducer';
export default {
  router: {
    path: '/ToDoList',
    component: () => (
      <Master>
        <View />
      </Master>
    )
  },
  reducer
};
