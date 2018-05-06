// Adds and removes user-selected food items to and from local state via actions sent from Client
const yummlyReducer = (state=[], action)=>{
    switch(action.type){
      case 'ADD_SEARCH_ITEM':
        if (state.includes(action.payload)){
          console.log('included');
          // Reset state as previous state
          return state
        }
      // Reset state as previous state + newly selected food item
        return [...state, action.payload]
      case 'REMOVE_SEARCH_ITEM':
      console.log(action.payload);
      // Removes deselected item from state via filter() function
        let newList = state.filter(item => item !== action.payload)
        return newList;
      case 'CLEAR_SEARCH_PARAMS':
        return [];
      default:
        return state;
    }
  }
export default yummlyReducer;