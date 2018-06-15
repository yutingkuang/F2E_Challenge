//@flow
import React from 'react';
import { compose, withStyle } from '~/core/container';
import styles from './w2.scss';

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
        <div styleName="card-list">
          <div styleName="card">
            <div styleName="card-img" />
            <div styleName="card-right">
              <div styleName="title mb-1">
                Trump Sees End to North Korea Nuclear Threat Despite Unclear
                Path
              </div>
              <div styleName="font-weight-bold mb-3 text-right">
                By PETER BAKER and CHOE SANG-HUN
              </div>
              <div styleName="mb-3">
                “Sleep well tonight!” President Trump reassured Americans after
                returning from the summit meeting. “What planet is the president
                on?” replied Senator Chuck Schumer.
              </div>
              <div styleName="d-lg-flex  mb-3 meta">
                <div styleName="d-flex mr-3">
                  <i styleName="fa fa-map-marker" />
                  <div styleName="ml-1">North Korea </div>,
                  <div styleName="ml-1">U.S </div>
                </div>
                <div>
                  <i styleName="fa fa-calendar" />
                  2018-06-13T15:34:48-04:00
                </div>
              </div>
              <div styleName="d-flex">
                <div styleName="facet">U.S</div>
                <div styleName="facet">Politics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));
