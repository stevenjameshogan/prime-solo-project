import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


// Root Saga - Calls other Sagas based on dispatch type
function * YummlySaga() {
  yield takeEvery('GET_RECIPES', getRecipes)
  yield takeEvery('GET_SELECTED_RECIPE', getSelectedRecipe)
}

// GET recipes via Yummly API Recipe Search and user-defined ingredients and parameters
function * getRecipes(action){
  // Construct unique URL string based on yummly requirements and user inputs
    // Define root URL string to add to (with my unique app id and key)
    let baseUrlString = `http://api.yummly.com/v1/api/recipes?_app_id=4fe75761&_app_key=b467b28b7553146b3589a8eb934349d4`;
    // If a user has added keywords to include in search, store as keywordString and add special characters per Yummly reqs
    let keywordString = '&';
    if (action.payload.searchParams.keywords.length) {
      keywordString = action.payload.searchParams.keywords + '&'
    };
    // If a user has added specific food items to include in search, store as includedString, change to lower case and add  special characters per Yummly reqs
    let includedString = '';
    if (action.payload.searchItems.length) {
      for (let i = 0; i < action.payload.searchItems.length; i++){
        includedString =  includedString + 'allowedIngredient[]=' + action.payload.searchItems[i].toLowerCase() + '&';
      }
    };
    // If a user has added specific food items to include in search, store as excludedString and add special characters per Yummly reqs
    let excludedString = '';
    if (action.payload.searchParams.excludedFoods.length) {
      excludedString = action.payload.searchParams.excludedFoods
    }
    // Concatenate all strings to form near-final Yummly query URL
    let preEncodedFinalString = baseUrlString + keywordString + includedString + excludedString + 'requirePictures=true&maxResult=10';
    // URL-encode that string to form our final query URL
    let encodedFinalString = encodeURI(preEncodedFinalString);
    // Send cookie and session data along with axios request
    const config ={
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    }
    // Axios GET request to Yummly API using our constructed string
    try{
        const recipes = yield call(axios.get, `${encodedFinalString}`, config )
        // If request is successful, dispatch the response data off to the recipeResultsReducer for storage and access by all components
        yield put({
          type: 'SET_RECIPES',
          payload: recipes.data
        })
      }
      catch(error){
    }
};

// GET details of a specific recipe via Yummly API Recipe Search and unique, user-selected recipe id
function * getSelectedRecipe(action) {
  // Construct unique URL string based on yummly requirements and unique recipe id of user-selected recipe
  let urlString = `http://api.yummly.com/v1/api/recipe/${action.payload}?_app_id=4fe75761&_app_key=b467b28b7553146b3589a8eb934349d4`;
    // Send cookie and session data along with axios request
  const config ={
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
  }
  // Axios GET request to Yummly API using our constructed string
  try{
      const recipe = yield call(axios.get, `${urlString}`, config )
      // If request is successful, dispatch the response.data off to the selectedRecipeReducer for storage and access by all components
      yield put({
        type: 'SET_SELECTED_RECIPE',
        payload: recipe.data
      })
    }
    catch(error){
  }
};



export default YummlySaga;