//@flow
import React from 'react';
import { withStyle } from '~/core/container';
import styles from './bar.scss';
import { F } from 'ramda';

const View = ({ filter, filterHandler }) => (
  <div styleName="bar">
    <div styleName="nav-bar">
      <div
        styleName={`nav ${filter === 'all' ? 'active' : ''}`}
        onClick={filter === 'all' ? F : filterHandler('all')}>
        My Tasks
      </div>
      <div
        styleName={`nav ${filter === 'ing' ? 'active' : ''}`}
        onClick={filter === 'ing' ? F : filterHandler('ing')}>
        In Progress
      </div>
      <div
        styleName={`nav ${filter === 'done' ? 'active' : ''}`}
        onClick={filter === 'done' ? F : filterHandler('done')}>
        Completed
      </div>
    </div>
  </div>
);

export default withStyle(styles)(View);
