import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import foodReducer from './foodReducer';


const store = combineReducers({
  user,
  login,
  foodReducer
});

export default store;
