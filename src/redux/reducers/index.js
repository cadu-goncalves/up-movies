import { combineReducers } from 'redux';
import topicsReducer from './topics';

const allReducers = combineReducers({
  topicsReducer
});

export default allReducers;