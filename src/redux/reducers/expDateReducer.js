import moment from 'moment';

// Receives all food items from saga, uses .filter() to pluck out only food expiring in 3 days or less, stores in state
const expDateReducer = (state=[], action)=>{
    switch(action.type){
      case 'SET_EXPIRING':
        let date = moment();
        // Filter function to determine if the difference between the current date and each food item's
        // expiration date is 3 or less, if so it stores in new array. Math.abs flips the "difference" numbers from negative to positive
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