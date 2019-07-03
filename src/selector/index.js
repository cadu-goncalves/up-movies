import get from 'lodash/get';

export const moviesSelector = (state) =>
  get(state, ['moviesReducer', 'items']);
