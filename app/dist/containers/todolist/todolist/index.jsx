//@flow
import React from 'react';
import { withStore } from '~/core/container';
import { STORE_KEY } from '../reducer';
import { addIndex, map } from 'ramda';

import Todo from './todoitem';

var mapIndexed = addIndex(map);

export default withStore(STORE_KEY)(({ storeData: todos }) => (
  <div>
    {mapIndexed((todo, idx) => <Todo key={`todo-${idx}`} todo={todo} />, todos)}
  </div>
));
