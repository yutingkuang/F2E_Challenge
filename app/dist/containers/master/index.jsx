//@flow
import React from 'react';
import { compose, withStyle } from '~/core/container';
import Menu from './side-menu';
import styles from './master.scss';

const Master = ({ children }: Object) => (
  <div styleName="master">
    <Menu />
    {/* children */}
    <div styleName="content">{children}</div>
  </div>
);

export default withStyle(styles)(Master);
