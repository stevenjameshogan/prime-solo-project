import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Root Saga - Calls other Sagas based on dispatch type
function * FoodSaga() {
  yield takeEvery('GET_ITEMS', getFoodItems)
  yield takeEvery('POST_ITEM', postFoodItem)
  yield takeEvery('DELETE_ITEM', deleteFoodItem)
  yield takeEvery('UPDATE_ITEM', updateFoodItem)
}

// Axios GET request for all food items in database/current user's Kitchen
function * getFoodItems(){
    // Send cookie and session data along with axios request
    const config ={
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    }
    try{
      const items = yield call(axios.get, '/api/food', config )
      // If request is successful, dispatch the response data off to the foodReducer for storage and access by all components
      yield put({
        type: 'SET_ITEMS',
        payload: items.data
      });
      // Also dispatches the expDateReducer all of the foods, as the reducer uses to identify and store expiring food items
      yield put({
        type: 'SET_EXPIRING',
        payload: items.data
      })
    }
    catch(error){
    }
};

// Axios POST request to add a new food item to database/current user's Kitchen
function * postFoodItem(action) {
  // Send cookie and session data along with axios request
  const config ={
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
  }
  try{
    yield call(axios.post, '/api/food', action.payload, config )
    // If request is successful, dispatch the response data off to the foodReducer for storage and access by all components
    yield put({
      type: 'GET_ITEMS',
    })
  }
  catch(error){
  }
};

// Axios DELETE request to remove a specific food item from database/current user's Kitchen by unique id
function * deleteFoodItem(action) {
  // Send cookie and session data along with axios request
  const config ={
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
  }
  try{
    yield call(axios.delete, `/api/food/${action.payload.id}`, config )
    // If request is successful, dispatch the response data off to the foodReducer for storage and access by all components
    yield put({
      type: 'GET_ITEMS',
    })
  }
  catch(error){
  }
};

// Axios PIT request to rupdate a specific food item in database/current user's Kitchen by unique id
function * updateFoodItem(action) {
  // Send cookie and session data along with axios request
  const config ={
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
  }
  try{
    yield call(axios.put,`/api/food/${action.payload.id}`, action.payload, config )
     // If request is successful, dispatch the response data off to the foodReducer for storage and access by all components
    yield put({
      type: 'GET_ITEMS',
    })
  }
  catch(error){
  }
};


export default FoodSaga;