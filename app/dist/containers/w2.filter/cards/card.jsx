//@flow
import React from 'react';
import { compose, withStyle } from '~/core/container';
import { mapProps } from 'recompose';
import styles from '../w2.scss';

import { map, addIndex, concat, take } from 'ramda';

const arr = ['A', 'B', 'C'];

export default withStyle(styles)(
  ({
    card: {
      title,
      byline,
      abstract,
      published_date,
      geo_facet: geos,
      facets,
      media,
      group
    }
  }) => (
    <div styleName="card">
      <div styleName="card-img">
        <img src={media.url} />
      </div>
      <div styleName="card-right">
        <div styleName="title mb-1">{title}</div>
        <div styleName="font-weight-bold mb-3 text-right">{byline}</div>
        <div styleName="mb-3">{abstract}</div>
        <div styleName="d-lg-flex  mb-3 meta">
          <div
            styleName={`${
              geos.length === 0 ? 'invisible' : ''
            } card-flex mr-3 `}>
            <i styleName="fa fa-map-marker" />
            {geos.length > 0 &&
              addIndex(map)((geo, idx) => {
                return (
                  <div key={`geo-${idx}`} styleName="ml-1">
                    {`${idx > 0 ? ', ' : ''}${geo}`}
                  </div>
                );
              }, geos)}
          </div>
          <div>
            <i styleName="fa fa-calendar" />
            {take(10, published_date)}
          </div>
        </div>
        <div styleName="card-flex">
          {facets.length > 0 &&
            addIndex(map)(
              (facet, idx) => (
                <div key={`facet-${idx}`} styleName="facet">
                  {facet}
                </div>
              ),
              take(2, facets)
            )}
          <div styleName="facet">{arr[group]}</div>
        </div>
      </div>
    </div>
  )
);
