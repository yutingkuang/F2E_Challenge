/* @flow */
import { reducerCreator, assign } from '~/core/reducer';
/* helper */
import {
  map,
  concat,
  findIndex,
  remove,
  append,
  filter,
  contains,
  isEmpty
} from 'ramda';

/* models */
import Story from './models/story';

/* type */
import type { Story as StoryType } from './type';

/* action type */
export const STORY_SAVE = 'STORY_SAVE';
export const FILTER_TOGGLE = 'FILTER_TOGGLE';
export const RESTORE = 'RESTORE';

/* api code */
export const API_TOP_STORY = 'API_TOP_STORY';

/* type */
type Filter = -1 | 0 | 1 | 2;
type State = {
  filter: Array<Filter>,
  stories: Array<Story>,
  filterStories: Array<Story>
};

/* store key */
export const STORE_KEY = 'store-top-stories';

export const defaultState: State = {
  filter: [-1],
  stories: [],
  filterStories: []
};

export const reducer = reducerCreator(defaultState, {
  [STORY_SAVE]: (state: State, payload: Array<StoryType>) => {
    const stories = map(story => assign(new Story(), transformStory(story)))(
      payload
    );
    return {
      ...state,
      stories,
      filterStories: stories
    };
  },

  [FILTER_TOGGLE]: ({ filter: factor, stories }: State, payload: Filter) => {
    const idx = findIndex(x => x === payload)(factor);
    const newFilter =
      idx === -1 ? append(payload, factor) : remove(idx, idx + 1, factor);
    return {
      filter: newFilter,
      stories,
      filterStories: isEmpty(newFilter)
        ? []
        : contains(-1)(newFilter)
          ? stories
          : filter(({ group }) => contains(group)(newFilter), stories)
    };
  },

  [RESTORE]: () => defaultState
});

export default {
  [STORE_KEY]: reducer
};

function transformStory(story) {
  const {
    title,
    byline,
    abstract,
    published_date,
    geo_facet = [],
    multimedia = [],
    des_facet = [],
    org_facet = [],
    per_facet = []
  } = story;

  return {
    ...story,
    facets: concat(concat(des_facet, org_facet), per_facet),
    media: multimedia.length > 0 && multimedia[0],
    group: Math.floor(Math.random() * 3)
  };
}
