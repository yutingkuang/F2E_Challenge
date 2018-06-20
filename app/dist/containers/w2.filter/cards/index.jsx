//@flow
import React from 'react';
import { compose, withStyle, withStore } from '~/core/container';
import { STORE_KEY } from '../fetchApi/reducer';
import styles from '../w2.scss';

import { map, addIndex } from 'ramda';

import Card from './card';

export default compose(
  withStore(`${STORE_KEY}.filterStories`),
  withStyle(styles)
)(({ storeData }) => (
  <div styleName="card-list">
    {addIndex(map)(
      (card, idx) => <Card key={`card-${idx}`} card={card} />,
      storeData
    )}
  </div>
));
