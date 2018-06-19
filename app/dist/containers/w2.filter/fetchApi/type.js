/* @flow */
export type Story = {
  section: 'string',
  subsection: 'string',
  title: 'string',
  abstract: 'string',
  url: 'string',
  thumbnail_standard: 'string',
  short_url: 'string',
  byline: 'string',
  item_type: 'string',
  updated_date: 'string',
  created_date: 'string',
  published_date: 'string',
  material_type_facet: 'string',
  kicker: 'string',
  des_facet: ['string'],
  org_facet: ['string'],
  per_facet: ['string'],
  geo_facet: ['string'],
  multimedia: [
    {
      url: 'string',
      format: 'string',
      height: 0,
      width: 0,
      type: 'string',
      subtype: 'string',
      caption: 'string',
      copyright: 'string'
    }
  ],
  related_urls: [
    {
      suggested_link_text: 'string',
      url: 'string'
    }
  ]
};

/**
 * api response
 */
export type ResponseType = {
  results: Array<Story>
};
