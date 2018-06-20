/* @flow */
export default class Media {
  url = '';
  format = '';
  height: 0;
  width: 0;
  type = '';
  subtype = '';
  caption = '';
  copyright = '';

  constructor() {
    this.url = './no-image.png';
    this.format = '';
    this.height = 0;
    this.width = 0;
    this.type = '';
    this.subtype = '';
    this.caption = '';
    this.copyright = '';
  }
}
