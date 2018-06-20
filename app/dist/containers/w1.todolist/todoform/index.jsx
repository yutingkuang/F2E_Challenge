//@flow
import React from 'react';
import handler from './handler';
import { takeLast, isNil } from 'ramda';

/**
 * Todo Form
 * @prop mode  (string) [add|edit]
 * @prop todo  (?Todo) [todo object]
 * @prop toggle (function) [控制Form開關]
 */
export default handler(
  ({
    todo: { isImportant, isDone, todo, due, attached, comment },
    mode,
    toggle,
    setHandler,
    changeInput,
    todoHandler
  }) => (
    <form>
      <div styleName="form-head">
        <div styleName="head-pieces">
          <div
            styleName={`checkbox ${isDone ? 'checked' : ''}`}
            onClick={setHandler('isDone', !isDone)}>
            <i styleName={`fa ${isDone ? 'fa-check' : 'hidden'}`} />
          </div>
        </div>
        <div styleName="head-pieces">
          <input
            type="text"
            value={todo}
            name="todo"
            onChange={changeInput}
            placeholder="Type Something Here…"
          />
        </div>
        <div
          styleName="head-pieces"
          onClick={setHandler('isImportant', !isImportant)}>
          <i styleName={`fa ${isImportant ? 'fa-star shiny' : 'fa-star-o'}`} />
        </div>
        <div styleName="head-pieces edit" onClick={toggle(false)}>
          <i styleName="fa fa-pencil" />
        </div>
      </div>
      <div styleName="form">
        <div styleName="input-item">
          <div styleName="input-title">
            <i styleName="fa fa-calendar" /> Deadline
          </div>
          <div styleName="input-box">
            <input
              type="datetime"
              value={isNil(due) ? '' : new Date(due).toLocaleDateString()}
              name="due"
              onChange={changeInput}
              placeholder="yyyy/mm/dd hh:mm"
            />
          </div>
        </div>
        <div styleName="input-item">
          <div styleName="input-title">
            <i styleName="fa fa-file-o" /> File
          </div>
          <div styleName="input-box">
            <label>
              <div styleName="input-attached">
                <i styleName="fa fa-plus" />
              </div>
              <input
                styleName="attached"
                type="file"
                name="attached"
                onChange={changeInput}
              />
              <div styleName="input-attached-path">
                {attached && attached.length > 45
                  ? `...` + takeLast(40, attached)
                  : attached}
              </div>
            </label>
          </div>
        </div>
        <div styleName="input-item">
          <div styleName="input-title">
            <i styleName="fa fa-commenting-o" /> Comment
          </div>
          <div styleName="input-box">
            <textarea
              styleName="input-textarea"
              rows="4"
              placeholder="Type your memo here…"
              onChange={changeInput}
              value={comment || ''}
              name="comment"
            />
          </div>
        </div>
      </div>
      <div styleName="form-fotter">
        <div styleName="btn btn-chancel" onClick={toggle(false)}>
          X Cancel
        </div>
        <div styleName="btn btn-add" onClick={todoHandler}>
          ＋ {mode === 'add' ? 'Add Task' : 'Save'}
        </div>
      </div>
    </form>
  )
);
