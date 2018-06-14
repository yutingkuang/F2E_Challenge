//@flow
import { emit } from '~/core/action/effects';
import { compose, withStyle, withDispatch } from '~/core/container';
import { withState, withProps, withHandlers, lifecycle } from 'recompose';
import { ADD_TODO, EDIT_TODO } from '../reducer';
import styles from './form.scss';
import { isNil } from 'ramda';

const initTodo = {
  index: 0,
  todo: '',
  isDone: false,
  isImportant: false,
  attached: null,
  due: null,
  comment: null
};

export default compose(
  withDispatch,
  withState('todo', 'setTodo', initTodo),
  withHandlers({
    setHandler: ({ todo: preTodo, setTodo }) => (name, value) => _ =>
      setTodo({ ...preTodo, [name]: value }),
    changeInput: ({ todo: preTodo, setTodo }) => ({
      target: { value, name }
    }) => setTodo({ ...preTodo, [name]: value }),
    todoHandler: ({ mode, todo, dispatch, toggle, setTodo }) => () => {
      if (mode === 'add') dispatch(emit(ADD_TODO, todo));
      else dispatch(emit(EDIT_TODO, todo));
      setTodo(initTodo); //reset
      toggle(false)(); //close form
    }
  }),
  lifecycle({
    componentDidMount() {
      const { mode, tododata, setTodo } = this.props;
      if (mode === 'edit') setTodo(tododata);
    }
  }),
  withStyle(styles)
);
