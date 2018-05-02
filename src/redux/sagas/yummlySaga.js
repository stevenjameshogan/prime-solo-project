import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


// Root Saga - Calls other Sagas based on dispatch type
function * YummlySaga() {
  yield takeEvery('GET_RECIPES', getRecipes)
}

function * getRecipes(action){
    console.log('in search saga', action.payload);
    let baseUrlString = `http://api.yummly.com/v1/api/recipes?_app_id=4fe75761&_app_key=b467b28b7553146b3589a8eb934349d4&requirePictures=true`
    let itemUrlString = '&allowedIngredient[]='
    for (let i = 0; i < action.payload.searchItems.length; i++){
        itemUrlString = itemUrlString + '&' + action.payload.searchItems[i]
    }
    let preUrlEncodeString = action.payload.searchParams.keywords + itemUrlString + action.payload.searchParams.excludedFoods;
    console.log(preUrlEncodeString);
    let lowerCaseUrlString = preUrlEncodeString.toLowerCase();
    console.log(lowerCaseUrlString);
    
    

    
    

    const searchTerms = action.payload;
    // Send cookie and session data along with axios request
    const config ={
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    }
    // If request is successful, dispatch the response.data off to the Reducer Store for storage and access by all components

  
}


export default YummlySaga;