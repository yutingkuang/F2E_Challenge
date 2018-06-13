//@flow
import React from 'react';
import { withStore, compose } from '~/core/container';
import { mapProps } from 'recompose';
import { STORE_KEY } from '../reducer';
import { addIndex, map, sortWith, prop, descend, ascend } from 'ramda';

import Todo from './todoitem';

var mapIndexed = addIndex(map);

export default compose(
  withStore(STORE_KEY),
  mapProps(({ storeData }) => ({
    todos: sortWith([descend(prop('isImportant')), ascend(prop('isDone'))])(
      storeData
    )
  }))
)(({ todos }) => (
  <div>
    {mapIndexed((todo, idx) => <Todo key={`todo-${idx}`} todo={todo} />, todos)}
  </div>
));
