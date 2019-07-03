export const UPDATE_MOVIES = 'Movie/UPDATE';

function action(type, payload = {}) {
  console.log('KKKKKKKKKKKKK');
  return { type, ...payload };
}

export const updateMovies = (items) => action(UPDATE_MOVIES, { items });
