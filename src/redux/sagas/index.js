import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import FoodSaga from './foodSaga';
import YummlySaga from './yummlySaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    FoodSaga(),
    YummlySaga()
    // watchIncrementAsync()
  ]);
}
