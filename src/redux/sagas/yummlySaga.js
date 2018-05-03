import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


// Root Saga - Calls other Sagas based on dispatch type
function * YummlySaga() {
  yield takeEvery('GET_RECIPES', getRecipes)
}

function * getRecipes(action){
    console.log('in search saga', action.payload);
    let baseUrlString = `http://api.yummly.com/v1/api/recipes?_app_id=4fe75761&_app_key=b467b28b7553146b3589a8eb934349d4`;
    let keywordString = '&';
    if (action.payload.searchParams.keywords.length) {
      keywordString = action.payload.searchParams.keywords + '&'
    };
    let includedString = '';
    if (action.payload.searchItems.length) {
      for (let i = 0; i < action.payload.searchItems.length; i++){
        includedString =  includedString + 'allowedIngredient[]=' + action.payload.searchItems[i].toLowerCase() + '&';
      }
    };
    let excludedString = '';
    if (action.payload.searchParams.excludedFoods.length) {
      excludedString = action.payload.searchParams.excludedFoods
    }
  
    let preEncodedFinalString = baseUrlString + keywordString + includedString + excludedString + 'requirePictures=true';
    let encodedFinalString = encodeURI(preEncodedFinalString);
    console.log(preEncodedFinalString);
    

    // Send cookie and session data along with axios request
    const config ={
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    }
    try{
        const recipes = yield call(axios.get, `${encodedFinalString}`, config )
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