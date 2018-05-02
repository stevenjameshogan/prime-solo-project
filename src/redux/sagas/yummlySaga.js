import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Root Saga - Calls other Sagas based on dispatch type
function * YummlySaga() {
  yield takeEvery('GET_RECIPES', getRecipes)
}

function * getRecipes(action){
    // Send cookie and session data along with axios request
    const config ={
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    }
    // If request is successful, dispatch the response.data off to the Reducer Store for storage and access by all components

    // * DETERMINE API QUERY BASED ON USER SEARCH PARAMETERS *
    console.log('in search saga', action.payload);
    
    // try{
    //   const items = yield call(axios.get, '/api/food', config )
    //   yield put({
    //     type: 'SET_ITEMS',
    //     payload: items.data
    //   })
    // }
    // catch(error){
    // }
}

export default YummlySaga;