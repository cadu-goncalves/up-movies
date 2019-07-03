import { call, put } from 'redux-saga/effects';
import { updateMovies } from '../actions';
import fetch from 'isomorphic-fetch';

const KEY = "1f54bd990f1cdfb230adb312546d765d";

// generator function used to fetch upcoming movies
function* getUpcoming() {
  try {
    const response = yield fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}`).then(res => res.json());
    const { data: { results }} = response;
    yield put(updateMovies(results.map(({ data: {title, release_date} }) => ({
      data: { title, release_date }
    }))));
  } catch(err) {
    // todo: show error
  }
}

export default function* moviesSaga() {
  yield call(getUpcoming);
}