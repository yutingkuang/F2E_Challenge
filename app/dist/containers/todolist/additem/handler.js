//@flow
import { compose, withStyle } from '~/core/container';
import { withState, withHandlers } from 'recompose';
import styles from './add.scss';

export default compose(
  withState('isOpen', 'setOpen', false),
  withHandlers({
    setOpen: ({ setOpen }) => isOpen => _ => setOpen(isOpen)
  }),
  withStyle(styles)
);
