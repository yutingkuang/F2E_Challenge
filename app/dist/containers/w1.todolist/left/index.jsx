//@flow
import React from 'react';
import { compose, withStore } from '~/core/container';
import { mapProps } from 'recompose';
import { STORE_KEY } from '../reducer';
import { countBy } from 'ramda';

export default compose(
  withStore(STORE_KEY),
  mapProps(({ storeData: todos, filter }) => ({
    left:
      filter === 'done'
        ? `${countBy(({ isDone }) => isDone)(todos).true} tasks completed`
        : `${countBy(({ isDone }) => isDone)(todos).false} tasks left`
  }))
)(({ left }) => <div>{left}</div>);
