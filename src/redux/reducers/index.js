import { combineReducers } from 'redux';
import moviesReducer from './movies';

const allReducers = combineReducers({
  moviesReducer
});

export default allReducers;