/* @flow */
import { reducerCreator, assign } from '~/core/reducer';
/* helper */
import { map } from 'ramda';

/* models */
import Story from './models/story';

/* type */
import type { Story as StoryType } from './type';

/* action type */
export const STORY_SAVE = 'STORY_SAVE';
export const STORY_RESTORE = 'STORY_RESTORE';

/* api code */
export const API_TOP_STORY = 'API_TOP_STORY';

/* type */
type State = Array<Story>;

/* store key */
export const STORE_KEY = 'store-top-stories';

export const defaultState: State = [];

export const reducer = reducerCreator(defaultState, {
  [STORY_SAVE]: (stories: Array<Story>, payload: Array<StoryType>) => {
    return map(item => assign(new Story(), item))(payload);
  },

  [STORY_RESTORE]: () => defaultState
});

export default {
  [STORE_KEY]: reducer
};
