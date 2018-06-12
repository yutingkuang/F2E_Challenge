//@flow
import React from 'react';
import View from './view';
import Master from '../master';

export default {
  router: {
    path: '/ToDoList',
    component: () => (
      <Master>
        <View />
      </Master>
    )
  }
};
