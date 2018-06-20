//@flow
import React from 'react';
import { withStore } from '~/core/container';
import { STORE_KEY } from '../fetchApi/reducer';

export default withStore(`${STORE_KEY}.filterStories`)(({ storeData }) => (
  <span>{storeData.length}</span>
));
