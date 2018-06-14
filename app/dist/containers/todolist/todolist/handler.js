//@flow
import { emit } from '~/core/action/effects';
import { compose, withStyle, withDispatch } from '~/core/container';
import { withHandlers, withState } from 'recompose';
import { EDIT_TODO } from '../reducer';
import styles from './todoitem.scss';

export default compose(
  withDispatch,
  withState('isEdit', 'setEdit', false),
  withHandlers({
    setEdit: ({ setEdit }) => isEdit => _ => setEdit(isEdit),
    setHandler: ({ todo: preTodo, dispatch }) => (name, value) => _ => {
      dispatch(emit(EDIT_TODO, { ...preTodo, [name]: value }));
    }
  }),
  withStyle(styles)
);
