
const selectedRecipeReducer = (state=[], action)=>{
    switch(action.type){
      case 'SET_SELECTED_RECIPE':
        return action.payload;
      default:
        return state;
    }
  }
  export default selectedRecipeReducer;