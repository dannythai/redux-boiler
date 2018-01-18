import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import thunk from 'redux-thunk';
import App from './containers/app';
import rootReducer from './reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger');
  const logger = createLogger({
    predicate: (getState, action) => action.type !== 'SET_DURATION',
    collapsed: true
  });

  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);