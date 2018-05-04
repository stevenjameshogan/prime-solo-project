// Receives all recipe results from a Yummly API Recipe Search via action from yummlyAPI, stores in state
const recipeResultsReducer = (state=[], action)=>{
  switch(action.type){
    case 'SET_RECIPES':
      return action.payload.matches;
    default:
      return state;
  }
}
export default recipeResultsReducer;