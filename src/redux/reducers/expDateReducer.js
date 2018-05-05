import moment from 'moment';

// Received all food items in a given user's kitchen via action from foodSaga, stores data in state
const expDateReducer = (state=[], action)=>{
    switch(action.type){
      case 'SET_EXPIRING':
        let date = moment();
        let expiring = action.payload.filter(
          (food => (Math.abs(date.diff(food.exp_date, 'days')) < 3))
        )
        // let difference = date.to(exp_date) 
        return expiring;
      default:
        return state;
    }
  }
export default expDateReducer;