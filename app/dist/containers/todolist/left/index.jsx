//@flow
import React from 'react';
import { compose, withStore } from '~/core/container';
import { mapProps } from 'recompose';
import { STORE_KEY } from '../reducer';
import { countBy } from 'ramda';

export default compose(
  withStore(STORE_KEY),
  mapProps(({ storeData: todos }) => ({
    left: countBy(({ isDone }) => isDone)(todos).false
  }))
)(({ left }) => <div>{`${left} tasks left`}</div>);
