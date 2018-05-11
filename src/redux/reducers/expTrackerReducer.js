
// Received all food items in a given user's kitchen via action from foodSaga, stores data in state
const expTrackerReducer = (state = false, action)=>{
    switch(action.type){
      case 'EXP_WARNING': 
        return true;
      default:
        return state;
    }
  }
export default expTrackerReducer;