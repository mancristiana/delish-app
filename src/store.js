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
  ingredients: [
    {
      _id: '5abe672d87200c146c12de37',
      name: 'Tomato',
      image:
        'https://s3.eu-central-1.amazonaws.com/delish-app-uploads/ingredients/tomato.jpg'
    },
    {
      _id: '5abf796b606df6000468c761',
      name: 'Olive Oil',
      image:
        'https://s3.eu-central-1.amazonaws.com/delish-app-uploads/ingredients/olive-oil.jpg'
    }
  ],
  recipes: [],
  modals: []
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
