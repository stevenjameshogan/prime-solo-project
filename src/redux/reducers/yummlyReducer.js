// Adds and removes user-selected food items to and from local state via actions sent from Client
const yummlyReducer = (state=[], action)=>{
    switch(action.type){
      case 'ADD_SEARCH_ITEM':
        // If the food item the user selected is already in stats as "selected", just return the current state to avoid duplicates
        if (state.includes(action.payload)){
          // Reset state as previous state
          return state
        }
      // Reset state as previous state + newly selected food item
        return [...state, action.payload]
      case 'REMOVE_SEARCH_ITEM':
        if (state.includes(action.payload)){
          // Reset state as previous state
          // Removes deselected item from state via filter() function
          let newList = state.filter(item => item !== action.payload)
          return newList;
        }
          return state;
        // Clears current state to reset recipe search inputs, user can start from scratch
      case 'CLEAR_SEARCH_PARAMS':
        return [];
      default:
        return state;
    }
  }
export default yummlyReducer;