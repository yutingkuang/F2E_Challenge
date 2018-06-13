//@flow
import React from 'react';
import { withStyle } from '~/core/container';
import styles from './todoitem.scss';
import { isNil } from 'ramda';

//onClick={setDone} onClick={setImportant} onClick={setOpen(false)}
export default withStyle(styles)(
  ({ todo: { isImportant, isDone, todo, due, attached, comment } }) => (
    <div styleName={`todo-box ${isImportant ? 'shiny' : ''}`}>
      <div styleName="todo-head">
        <div styleName="head-pieces">
          <div styleName={`checkbox ${isDone ? 'checked' : ''}`}>
            <i styleName={`fa ${isDone ? 'fa-check' : 'hidden'}`} />
          </div>
        </div>
        <div styleName={`head-pieces ${isDone ? 'done' : ''}`}>{todo}</div>
        <div styleName="head-pieces">
          <i styleName={`fa ${isImportant ? 'fa-star shiny' : 'fa-star-o'}`} />
        </div>
        <div styleName="head-pieces">
          <i styleName="fa fa-pencil" />
        </div>
      </div>
      <div styleName="todo-meta">
        <div styleName={`meta-pieces ${isNil(due) ? 'hidden' : ''}`}>
          <i styleName={`fa ${!isNil(due) ? 'fa fa-calendar' : 'hidden'}`} />{' '}
          {new Date(due).toLocaleDateString()}
        </div>
        <div styleName={`meta-pieces ${isNil(attached) ? 'hidden' : ''}`}>
          <i styleName={`fa ${!isNil(attached) ? 'fa-file-o' : 'hidden'}`} />
        </div>
        <div styleName={`meta-pieces ${isNil(comment) ? 'hidden' : ''}`}>
          <i
            styleName={`fa ${!isNil(comment) ? 'fa-commenting-o' : 'hidden'}`}
          />
        </div>
      </div>
    </div>
  )
);
