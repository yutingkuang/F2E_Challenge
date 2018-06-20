/* @flow */
type Media = {
  url: string,
  format: string,
  height: 0,
  width: 0,
  type: string,
  subtype: string,
  caption: string,
  copyright: string
};
export type Story = {
  section: string,
  subsection: string,
  title: string,
  abstract: string,
  url: string,
  thumbnail_standard: string,
  short_url: string,
  byline: string,
  item_type: string,
  updated_date: string,
  created_date: string,
  published_date: string,
  material_type_facet: string,
  kicker: string,
  des_facet: Array<string>,
  org_facet: Array<string>,
  per_facet: Array<string>,
  geo_facet: Array<string>,
  multimedia: Array<Media>
};

/**
 * api response
 */
export type ResponseType = {
  results: Array<Story>
};
