import moment from 'moment';

// Received all food items in a given user's kitchen via action from foodSaga, stores data in state
const expDateReducer = (state=[], action)=>{
    switch(action.type){
      case 'SET_EXPIRING':
        let date = moment();
        console.log('in expiring reducer', action.payload);
        let expireIn4 = action.payload.filter((food => ((date.to(food.exp_date)) === 'in 4 days')))
        let expireIn3 = action.payload.filter((food => ((date.to(food.exp_date)) === 'in 3 days')))
        let expireIn2 = action.payload.filter((food => ((date.to(food.exp_date)) === 'in 2 day')))
        let expireIn1 = action.payload.filter((food => ((date.to(food.exp_date)) === 'in 1 day')))
        console.log(expireIn4);
        // let difference = date.to(exp_date) 
        return {expireIn1, expireIn2, expireIn3, expireIn4}
      default:
        return state;
    }
  }
export default expDateReducer;