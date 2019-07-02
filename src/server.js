import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './redux/store';
import topicsSaga from './saga/topics';

const { CLIENT_ONLY } = process.env;

// express
const port = process.env.PORT || 3000;
const app = express();
// view engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');
// static content
app.use('/static', express.static(path.join(__dirname, 'public')));

// bind all routes to ReactDOMServer
app.get('*', async (req, res) => {
  // context object contains render results
  const context = {};

  // recover saga state
  const store = configureStore({});
  await store.runSaga(topicsSaga).done;
  const state = store.getState();

  // render state and content
  res.render('layout', {
    state: JSON.stringify(state),
    content: ReactDOMServer.renderToString(
      CLIENT_ONLY
      ? ''
      : (
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App/>
          </StaticRouter>
        </Provider>
      )
    )
  });
});

// run express server
app.listen(port, () => console.log(`Listening at ${port}`));
