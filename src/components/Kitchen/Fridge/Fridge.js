import React, { Component } from 'react';
import { connect } from 'react-redux';
import FridgeItem from './FridgeItem/FridgeItem';

// This component is a virtual representation of a given user's kitchen Fridge and all food items currently stored there

class Fridge extends Component {

    render() {
        // Alias the Redux foodReducer state as allItems (for clarity) which is an array of all food items held by a given user
        let allItems = this.props.reduxState.foodReducer;
        // Filter through allItems to pick out only food items stored in the Fridge, store these foods in a new array (fridgeList)
        let fridgeList = allItems.filter(food => food.location === 'Fridge');
        // Map over fridgeList to create new "FridgeItem" component instances for each item. Pass each item it's unique props.
        // Alias all instances as a value of a single variable (fridgeItems) for clarity below
        let fridgeItems = fridgeList.map((item) => {
            return(<FridgeItem key={item.id} item={item} className="panelContent" />)
        })

        return(
            // Display all Fridge items on DOM by referencing our aliased components variable, fridgeItems
            <div className="panelConten">
                {fridgeItems}
            </div>
        )
    }
}

// connect component to Redux, giving it access to the state of foodReducer
const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(Fridge);