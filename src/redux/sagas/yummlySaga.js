import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


// Root Saga - Calls other Sagas based on dispatch type
function * YummlySaga() {
  yield takeEvery('GET_RECIPES', getRecipes)
}

function * getRecipes(action){
    console.log('in search saga', action.payload);
    let baseUrlString = `http://api.yummly.com/v1/api/recipes?_app_id=4fe75761&_app_key=b467b28b7553146b3589a8eb934349d4`
    let itemUrlString = '&allowedIngredient[]='
    for (let i = 0; i < action.payload.searchItems.length; i++){
        itemUrlString = itemUrlString + action.payload.searchItems[i] + '&'
    }
    let preUrlEncodedString = (action.payload.searchParams.keywords + itemUrlString + action.payload.searchParams.excludedFoods).toLowerCase();
    let urlEncodedString = encodeURI(preUrlEncodedString);
    let finalApiString = baseUrlString + urlEncodedString + 'requirePictures=true';
    console.log(finalApiString);
    // Send cookie and session data along with axios request
    const config ={
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    }
    try{
        const recipes = yield call(axios.get, `${finalApiString}`, config )
        yield put({
          type: 'SET_RECIPES',
          payload: recipes.data
        })
      }
      catch(error){
    }
    // If request is successful, dispatch the response.data off to the Reducer Store for storage and access by all components

  
}


export default YummlySaga;