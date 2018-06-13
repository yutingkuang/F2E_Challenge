/* @flow */
import { reducerCreator, assign } from '~/core/reducer';
/* helper */
import { append, update } from 'ramda';

/* action type */
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';

/* type */
type ToDo = {
  todo: string,
  isDone: boolean,
  isImportant: boolean,
  attached: ?string,
  due: ?number,
  comment: ?string
};
type State = Array<ToDo>;

/* store key */
export const STORE_KEY = 'store-to-do-list';

// 預設給5個範例
export const defaultState: State = [
  {
    todo: 'Type Something Here…',
    isDone: false,
    isImportant: true,
    attached: null,
    due: null,
    comment: null
  },
  {
    todo: 'Type Something Here…',
    isDone: false,
    isImportant: true,
    attached: './../../doc.txt',
    due: 1526601600000,
    comment: null
  },
  {
    todo: 'Type Something Here…',
    isDone: false,
    isImportant: false,
    attached: null,
    due: 1531353600000,
    comment: null
  },
  {
    todo: 'Type Something Here…',
    isDone: false,
    isImportant: false,
    attached: './../../doc.txt',
    due: null,
    comment: null
  },
  {
    todo: 'Type Something Here…',
    isDone: true,
    isImportant: false,
    attached: null,
    due: null,
    comment: null
  }
];

export const reducer = reducerCreator(defaultState, {
  [ADD_TODO]: (preState, todo: ToDo) => append(todo, preState),
  [EDIT_TODO]: (preState, { todo, index }) => update(index, todo, preState)
});

export default {
  [STORE_KEY]: reducer
};
