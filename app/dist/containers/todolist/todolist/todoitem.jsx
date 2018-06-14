// @flow
import React from 'react';
import handler from './handler';
import { isNil } from 'ramda';

import ToDoForm from '../todoform';

export default handler(
  ({
    todo: { index, isImportant, isDone, todo: title, due, attached, comment },
    todo,
    setHandler,
    isEdit,
    setEdit
  }) => (
    <div styleName={`todo-box ${isImportant ? 'shiny' : ''}`}>
      <div styleName={isEdit ? 'hidden' : ''}>
        <div styleName="todo-head">
          <div styleName="head-pieces">
            <div
              styleName={`checkbox ${isDone ? 'checked' : ''}`}
              onClick={setHandler('isDone', !isDone)}>
              <i styleName={`fa ${isDone ? 'fa-check' : 'hidden'}`} />
            </div>
          </div>
          <div
            styleName={`head-pieces ${isDone ? 'done' : ''}`}
            onClick={setEdit(!isEdit)}>
            {title}
          </div>
          <div
            styleName="head-pieces"
            onClick={setHandler('isImportant', !isImportant)}>
            <i
              styleName={`fa ${isImportant ? 'fa-star shiny' : 'fa-star-o'}`}
            />
          </div>
          <div styleName="head-pieces" onClick={setEdit(!isEdit)}>
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
      <div styleName={`edit-from ${!isEdit ? 'hidden' : ''}`}>
        <ToDoForm
          key={`todo-edit-form-${index}`}
          mode="edit"
          toggle={setEdit}
          tododata={todo}
        />
      </div>
    </div>
  )
);
