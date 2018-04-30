import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import FoodSaga from './foodSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    FoodSaga(),
    // watchIncrementAsync()
  ]);
}
