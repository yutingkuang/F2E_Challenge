import React from 'react';
import { emit } from '~/core/action/effects';
import { compose, withDispatch } from '~/core/container';
import { lifecycle } from 'recompose';
import { STORY_SAVE } from './reducer';

const apiKey = '356b40eb293040ea9c942c8363a140d2';
const url =
  'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=' + apiKey;

export default compose(
  withDispatch,
  lifecycle({
    componentDidMount() {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          if (data.results.length > 0)
            this.props.dispatch(emit(STORY_SAVE, data.results));
        });
    }
  })
)(_ => <div />);
