

// Received all food items in a given user's kitchen via action from foodSaga, stores data in state
const foodReducer = (state=[], action)=>{
    switch(action.type){
      case 'SET_ITEMS':
        return action.payload;
      default:
        return state;
    }
  }
export default foodReducer;