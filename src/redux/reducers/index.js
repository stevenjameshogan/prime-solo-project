import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import foodReducer from './foodReducer';
import yummlyReducer from './yummlyReducer';
import recipeResultsReducer from './recipeResultsReducer'
import selectedRecipeReducer from './selectedRecipeReducer'
import expDateReducer from './expDateReducer'


const store = combineReducers({
  user,
  login,
  foodReducer,
  yummlyReducer,
  recipeResultsReducer,
  selectedRecipeReducer,
  expDateReducer
});

export default store;
