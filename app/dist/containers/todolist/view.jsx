import React from 'react';
import { withStyle } from '~/core/container';
import styles from './todolist.scss';

/* components */
import Bar from './bar';
import Add from './additem';

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
        <div styleName="todo-list">todo-list</div>
      </div>
    </div>
  </div>
));
