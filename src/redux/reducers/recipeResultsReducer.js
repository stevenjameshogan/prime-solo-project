
const recipeResultsReducer = (state=[], action)=>{
  switch(action.type){
    case 'SET_RECIPES':
      return action.payload.matches;
    default:
      return state;
  }
}
export default recipeResultsReducer;