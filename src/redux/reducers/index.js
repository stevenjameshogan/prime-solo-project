import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import foodReducer from './foodReducer';
import yummlyReducer from './yummlyReducer';


const store = combineReducers({
  user,
  login,
  foodReducer,
  yummlyReducer
});

export default store;
