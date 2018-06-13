//@flow
import { emit } from '~/core/action/effects';
import { compose, withStyle, withDispatch } from '~/core/container';
import { withState, withStateHandlers, withHandlers } from 'recompose';
import { ADD_TODO } from '../reducer';
import styles from './add.scss';

export default compose(
  withDispatch,
  withStateHandlers(
    {
      isOpen: false,
      todo: {
        todo: '',
        isDone: false,
        isImportant: false,
        attached: null,
        due: null,
        comment: null
      }
    },
    {
      setOpen: _ => isOpen => ({
        isOpen
      }),
      setImportant: ({ todo }) => isImportant => ({
        todo: { ...todo, isImportant }
      }),
      setAttached: ({ todo }) => attached => ({
        todo: { ...todo, attached }
      }),
      setDone: ({ todo }) => isDone => ({
        todo: { ...todo, isDone }
      }),
      setDue: ({ todo }) => due => ({
        todo: { ...todo, due }
      }),
      setTodo: ({ todo: preTodo }) => todo => ({
        todo: { ...preTodo, todo }
      }),
      changeInput: ({ todo: preTodo }) => ({ target: { value, name } }) => ({
        todo: { ...preTodo, [name]: value }
      }),
      resetTodo: _ => _ => ({
        todo: {
          todo: '',
          isDone: false,
          isImportant: false,
          attached: null,
          due: null,
          comment: null
        }
      })
    }
  ),
  withHandlers({
    setOpen: ({ setOpen }) => isOpen => _ => setOpen(isOpen),
    setImportant: ({ setImportant, todo: { isImportant } }) => _ =>
      setImportant(!isImportant),
    setDone: ({ setDone, todo: { isDone } }) => _ => setDone(!isDone),
    addTodo: ({ todo, dispatch, setOpen, resetTodo }) => _ => {
      dispatch(emit(ADD_TODO, todo));
      resetTodo();
      setOpen(false);
    }
  }),
  withStyle(styles)
);
