//@flow
import React from 'react';
import { withStyle } from '~/core/container';
import styles from './w2.scss';

// components
import Fetch from './fetchApi';
import CardList from './cards';
import FilterForm from './filter-form';
import Count from './count';
import Tag from './tag';

export default withStyle(styles)(_ => (
  <div styleName="filter">
    <div styleName="filter-head">
      <div styleName="site-name">HaveFun</div>
      <div>
        <div styleName="site-search">
          <i styleName="fa fa-search" /> Explore top stories (No Function)
        </div>
      </div>
    </div>
    <div styleName="filter-body">
      <FilterForm />
      <div styleName="filter-content">
        <div styleName="show-txt">
          Showing <Count /> results by…
        </div>
        <Tag />
        <CardList />
      </div>
    </div>
    <Fetch />
  </div>
));
