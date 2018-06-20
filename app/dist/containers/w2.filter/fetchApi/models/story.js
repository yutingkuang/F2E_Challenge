/* @flow */
import Media from './media';
export default class Story {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  thumbnail_standard: string;
  short_url: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  facets: Array<string>;
  geo_facet: Array<string>;
  multimedia: Array<Media>;
  media: Media;
  group: -1 | 0 | 1 | 2;

  constructor() {
    this.section = '';
    this.subsection = '';
    this.title = '';
    this.abstract = '';
    this.url = '';
    this.thumbnail_standard = '';
    this.short_url = '';
    this.byline = '';
    this.item_type = '';
    this.updated_date = '';
    this.created_date = '';
    this.published_date = '';
    this.material_type_facet = '';
    this.kicker = '';
    this.facets = [];
    this.geo_facet = [];
    this.multimedia = [];
    this.media = new Media();
    this.group = 0;
  }
}
