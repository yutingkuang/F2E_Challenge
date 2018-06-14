//@flow
import React from 'react';
import { compose, withStyle } from '~/core/container';
import { withHandlers, withState, shouldUpdate } from 'recompose';
import styles from './todolist.scss';

/* components */
import Bar from './bar';
import Add from './additem';
import ToDoList from './todolist';
import Left from './left';

export default compose(
  withState('filter', 'setFilter', 'all'),
  withHandlers({
    filterHandler: ({ setFilter }) => filter => () => {
      setFilter(filter);
    }
  }),
  withStyle(styles)
)(({ filter, filterHandler }) => (
  <div styleName="container">
    {/* bar */}
    <Bar filter={filter} filterHandler={filterHandler} />
    {/* to do */}
    <div styleName="content">
      <div styleName="todo-body">
        {/* add item */}
        <div styleName="add-item">
          <Add />
        </div>
        {/* todo item */}
        <div styleName="todo-list">
          <ToDoList filter={filter} />
        </div>
        <div styleName="todo-left">
          <Left filter={filter} />
        </div>
      </div>
    </div>
  </div>
));
