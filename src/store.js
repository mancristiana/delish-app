import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
// Import the root reducer
import rootReducer from './reducers/index';

// Create and export browser history
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

// Create object for default data
const defaultState = {
  ingredients: [],
  recipes: [],
  modals: []
};

// Include devToolsExtension
// See: https://github.com/zalmoxisus/redux-devtools-extension
// See: https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f

const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, defaultState, composedEnhancers);

export default store;
