//@flow
import React from 'react';
import { withStore, compose } from '~/core/container';
import { mapProps } from 'recompose';
import { STORE_KEY } from '../reducer';
import {
  addIndex,
  map,
  sortWith,
  prop,
  descend,
  ascend,
  propEq,
  filter
} from 'ramda';

import Todo from './todoitem';

var mapIndexed = addIndex(map);

export default compose(
  withStore(STORE_KEY),
  mapProps(({ storeData, filter: slider }) => {
    switch (slider) {
      case 'all':
        return {
          todos: sortWith([
            ascend(prop('isDone')),
            descend(prop('isImportant'))
          ])(storeData)
        };
      case 'ing':
        return {
          todos: sortWith([descend(prop('isImportant'))])(
            filter(propEq('isDone', false), storeData)
          )
        };
      case 'done':
        return {
          todos: sortWith([descend(prop('isImportant'))])(
            filter(propEq('isDone', true), storeData)
          )
        };
    }
  })
)(({ todos }) => (
  <div>
    {mapIndexed((todo, idx) => <Todo key={`todo-${idx}`} todo={todo} />, todos)}
  </div>
));
