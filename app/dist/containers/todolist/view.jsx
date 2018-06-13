//@flow
import React from 'react';
import { withStyle } from '~/core/container';
import styles from './todolist.scss';

/* components */
import Bar from './bar';
import Add from './additem';
import ToDoList from './todolist';
import Left from './left';

export default withStyle(styles)(_ => (
  <div>
    {/* bar */}
    <Bar />
    {/* to do */}
    <div styleName="content">
      <div styleName="todo-body">
        {/* add item */}
        <div styleName="add-item">
          <Add />
        </div>
        {/* todo item */}
        <div styleName="todo-list">
          <ToDoList />
        </div>
        <div styleName="todo-left">
          <Left />
        </div>
      </div>
    </div>
  </div>
));
