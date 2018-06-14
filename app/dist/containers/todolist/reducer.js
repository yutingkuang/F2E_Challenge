/* @flow */
import { reducerCreator, assign } from '~/core/reducer';
/* helper */
import { append, update, last, findIndex, propEq } from 'ramda';

/* action type */
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';

/* type */
type ToDo = {
  index: number,
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
    index: 0,
    todo: 'Type Something Here…',
    isDone: false,
    isImportant: true,
    attached: null,
    due: null,
    comment: null
  },
  {
    index: 1,
    todo: 'Type Something Here…',
    isDone: false,
    isImportant: true,
    attached: './../../doc.txt',
    due: 1526601600000,
    comment: null
  },
  {
    index: 2,
    todo: 'Type Something Here…',
    isDone: false,
    isImportant: false,
    attached: null,
    due: 1531353600000,
    comment: null
  },
  {
    index: 3,
    todo: 'Type Something Here…',
    isDone: false,
    isImportant: false,
    attached: './../../doc.txt',
    due: null,
    comment: null
  },
  {
    index: 4,
    todo: 'Type Something Here…',
    isDone: true,
    isImportant: false,
    attached: null,
    due: null,
    comment: null
  }
];

export const reducer = reducerCreator(defaultState, {
  [ADD_TODO]: (preState, todo: ToDo) => {
    const index = preState.length > 0 ? last(preState).index + 1 : 0;
    return append({ ...todo, index }, preState);
  },
  [EDIT_TODO]: (preState, todo: ToDo) =>
    update(findIndex(propEq('index', todo.index))(preState), todo, preState)
});

export default {
  [STORE_KEY]: reducer
};
