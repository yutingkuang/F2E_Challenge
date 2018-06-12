//@flow
import React from 'react';
import { withStyle } from '~/core/container';
import styles from './bar.scss';

const View = ({}) => (
  <div styleName="navbar navbar-expand navbar-dark">
    <div />
  </div>
);

export default withStyle()(View);
