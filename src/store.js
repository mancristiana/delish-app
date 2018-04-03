import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import the root reducer
import rootReducer from './reducers/index';

// Create and export browser history
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

// Create object for default data
const defaultState = {
  ingredients: [],
  recipes: []
};

const middleware = [
  // Use ReduxThunk middleware to dispatch async functions
  ReduxThunk,

  // Build the middleware for intercepting and dispatching navigation actions
  routerMiddleware(history)
];

// Include devToolsExtension
// See: https://github.com/zalmoxisus/redux-devtools-extension
const enhancers = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, defaultState, enhancers);

export default store;
