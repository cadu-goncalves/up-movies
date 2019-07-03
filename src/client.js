import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './redux/store';
import movieSaga from './saga/movies';

const initialState = window.__REDUX_STATE__ || {};
const store = configureStore(initialState);

// async saga run
store.runSaga(movieSaga);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>,
  document.getElementById('content')
);