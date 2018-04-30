import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Root Saga - Calls other Sagas based on dispatch type
function * FoodSaga() {
  yield takeEvery('GET_ITEMS', getFoodItems);
}

// Axios request for all food items in current user's Kitchen
function * getFoodItems(){
    console.log('get food items called');
    // Send cookie and session data along with axios request
    const config ={
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    }
    // If request is successfull, dispatch the response.data off to the Reducer Store for storage and access by all components
    try{
      const items = yield call(axios.get, '/api/food', config )
      yield put({
        type: 'SET_ITEMS',
        payload: items.data
      })
    }
    catch(error){
      console.log('an error in foodSaga ', error);
    }
  }
  
  export default FoodSaga;