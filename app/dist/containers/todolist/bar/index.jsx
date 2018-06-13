//@flow
import React from 'react';
import { withStyle } from '~/core/container';
import styles from './bar.scss';

const View = ({}) => (
  <div styleName="bar">
    <div styleName="nav-bar">
      <div styleName="nav active">My Tasks</div>
      <div styleName="nav">In Progress</div>
      <div styleName="nav">Completed</div>
    </div>
  </div>
);

export default withStyle(styles)(View);
