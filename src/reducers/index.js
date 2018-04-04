import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import modals from './modals';
import ingredients from './ingredients';
import recipes from './recipes';

const rootReducer = combineReducers({
  ingredients,
  recipes,
  modals,
  routing: routerReducer
});

export default rootReducer;
