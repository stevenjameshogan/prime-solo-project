const yummlyReducer = (state=[], action)=>{

    switch(action.type){
      case 'ADD_SEARCH_ITEM':
        console.log(state);
        return action.payload;
      case 'REMOVE_SEARCH_ITEM':
        console.log(state);
        return action.payload;
      default:
        return state;
    }
  }
export default yummlyReducer;