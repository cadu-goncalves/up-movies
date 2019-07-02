import { call, put } from 'redux-saga/effects';
import { updateTopics } from '../actions';
import fetch from 'isomorphic-fetch';

// generator function used to fetch topics
function* getTopicsFromReddit() {
  try {
    const response = yield fetch('https://www.reddit.com/r/reactjs.json').then(res => res.json());
    const { data: { children }} = response;
    yield put(updateTopics(children.map(({ data: {url, title} }) => ({
      data: { url, title }
    }))));
  } catch(err) {
    // todo: show error
  }
}

export default function* topicsSaga() {
  yield call(getTopicsFromReddit);
}