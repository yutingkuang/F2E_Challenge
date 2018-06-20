//@flow
import React from 'react';
import { emit } from '~/core/action/effects';
import { compose, withStyle, withStore, withDispatch } from '~/core/container';
import { withHandlers, withProps, defaultProps } from 'recompose';
import { STORE_KEY, FILTER_TOGGLE } from '../fetchApi/reducer';
import styles from '../w2.scss';

import { map, addIndex, filter } from 'ramda';

export default compose(
  withDispatch,
  defaultProps({ arr: ['ALL', 'A', 'B', 'C'] }),
  withStore(`${STORE_KEY}.filter`),
  withHandlers({
    filterToggle: ({ dispatch }) => filter => () =>
      dispatch(emit(FILTER_TOGGLE, filter))
  }),
  withStyle(styles)
)(({ storeData: factor, filterToggle, arr }) => (
  <div styleName="tags">
    {addIndex(map)(
      (tag, idx) => (
        <div
          key={`tag-${idx}`}
          styleName="tag mr-3"
          onClick={filterToggle(tag)}>
          {arr[tag + 1]}
          <span styleName="tag-x">X</span>
        </div>
      ),
      factor
    )}
  </div>
));
