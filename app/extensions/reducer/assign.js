/* @flow */
import { curry, pick, keys } from 'ramda';

module.exports = curry(
  <T>(target: T, assignObj: Object): T =>
    Object.assign(target, pick(keys((target: any)), assignObj))
);
