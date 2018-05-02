const yummlyReducer = (state=[], action)=>{

    switch(action.type){
      case 'ADD_SEARCH_ITEM':
        return [...state, action.payload]
      case 'REMOVE_SEARCH_ITEM':
        console.log(state);
        let newList = state.filter(item => item.id !== action.payload.id)
        return newList;
      default:
        return state;
    }
  }
export default yummlyReducer;