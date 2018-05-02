import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import foodReducer from './foodReducer';
import yummlyReducer from './yummlyReducer';
import recipeResultsReducer from './recipeResultsReducer'


const store = combineReducers({
  user,
  login,
  foodReducer,
  yummlyReducer,
  recipeResultsReducer
});

export default store;
