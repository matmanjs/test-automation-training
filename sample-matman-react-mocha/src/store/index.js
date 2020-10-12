import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import apiMiddleware from '../middlewares/api';

import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunkMiddleware, apiMiddleware, loggerMiddleware),
);

export default configureStore;
