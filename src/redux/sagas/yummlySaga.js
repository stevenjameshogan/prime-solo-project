import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


// Root Saga - Calls other Sagas based on dispatch type
function * YummlySaga() {
  yield takeEvery('GET_RECIPES', getRecipes)
  yield takeEvery('GET_SELECTED_RECIPE', getSelectedRecipe)
}

// GET recipes via Yummly API Recipe Search and user-defined ingredients and parameters
function * getRecipes(action){
    const config ={
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    }
    // Axios GET request to Yummly API using our constructed string
    try{
        const recipes = yield call(axios.post, '/api/yummly/getAllRecipes', action.payload, config )
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
  
  const config ={
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
  }
  // Axios GET request to Yummly API using our constructed string
  try{
      const recipe = yield call(axios.post, 'api/yummly/getRecipeDetails', {id: action.payload}, config )
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