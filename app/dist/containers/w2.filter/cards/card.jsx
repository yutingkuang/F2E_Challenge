//@flow
import React from 'react';
import { compose, withStyle } from '~/core/container';
import { mapProps } from 'recompose';
import styles from '../w2.scss';

import { map, addIndex, concat, take } from 'ramda';

export default compose(
  mapProps(
    ({
      card: {
        title,
        byline,
        abstract,
        published_date,
        geo_facet = [],
        multimedia = [],
        des_facet = [],
        org_facet = [],
        per_facet = []
      }
    }) => ({
      title,
      byline,
      abstract,
      published_date,
      geos: geo_facet,
      media: multimedia.length > 0 ? multimedia[0] : null,
      facets: take(2, concat(concat(des_facet, org_facet), per_facet))
    })
  ),
  withStyle(styles)
)(({ title, byline, abstract, published_date, geos, facets, media }) => (
  <div styleName="card">
    <div styleName="card-img">
      <img src={media && media.url} />
    </div>
    <div styleName="card-right">
      <div styleName="title mb-1">{title}</div>
      <div styleName="font-weight-bold mb-3 text-right">{byline}</div>
      <div styleName="mb-3">{abstract}</div>
      <div styleName="d-lg-flex  mb-3 meta">
        <div
          styleName={`${geos.length === 0 ? 'invisible' : ''} card-flex mr-3 `}>
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
          {published_date}
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
            facets
          )}
      </div>
    </div>
  </div>
));
