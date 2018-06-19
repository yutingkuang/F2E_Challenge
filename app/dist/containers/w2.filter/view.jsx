//@flow
import React from 'react';
import { withStyle } from '~/core/container';
import styles from './w2.scss';

// components
import Fetch from './fetchApi';
import CardList from './cards';
export default withStyle(styles)(_ => (
  <div styleName="filter">
    <div styleName="filter-head">
      <div styleName="site-name">HaveFun</div>
      <div>
        <div styleName="site-search">search</div>
      </div>
    </div>
    <div styleName="filter-body">
      <div styleName="filter-form">Form</div>
      <div styleName="filter-content">
        <div styleName="show-txt">
          Showing <span>15</span> results by…
        </div>
        <div styleName="tags">
          <div styleName="tag mr-3">
            Koahsiung
            <span styleName="tag-x">X</span>
          </div>
          <div styleName="tag mr-3">
            Entertainment
            <span styleName="tag-x">X</span>
          </div>
        </div>
        <CardList />
      </div>
    </div>
    <Fetch />
  </div>
));
