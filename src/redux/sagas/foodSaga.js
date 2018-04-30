import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function * getFoodItems(){
    console.log('get food items called');
    const config ={
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    }
    try{
      const items = yield call(axios.get, '/food', config )
      yield put({
        type: 'SET_ITEMS',
        payload: items.data
      })
    }
    catch(error){
      console.log('an error in foodSaga ', error);
    }
  }

  function * FoodSaga() {
    yield takeEvery('GET_ITEMS', getFoodItems);
  }
  
  export default FoodSaga;