//@flow
import React from 'react';
import { emit } from '~/core/action/effects';
import { compose, withStyle, withStore, withDispatch } from '~/core/container';
import { withHandlers, defaultProps } from 'recompose';
import { STORE_KEY, FILTER_TOGGLE } from '../fetchApi/reducer';
import styles from '../w2.scss';

import { map, addIndex, filter, contains } from 'ramda';

export default compose(
  withDispatch,
  defaultProps({ arr: ['ALL', 'A', 'B', 'C'] }),
  withStore(`${STORE_KEY}.filter`),
  withHandlers({
    filterToggle: ({ dispatch }) => filter => () =>
      dispatch(emit(FILTER_TOGGLE, filter))
  }),
  withStyle(styles)
)(({ storeData, filterToggle, arr }) => (
  <div styleName="filter-form">
    <div styleName="form-title">Categories</div>
    {addIndex(map)(
      (tag, idx) => (
        <div styleName="form-input" key={`form-input-${idx}`}>
          <div styleName="form-checkbox" onClick={filterToggle(idx - 1)}>
            <i
              styleName={`fa fa-check ${
                contains(idx - 1)(storeData) ? '' : 'hidden'
              }`}
            />
          </div>
          {tag}
        </div>
      ),
      arr
    )}
  </div>
));
