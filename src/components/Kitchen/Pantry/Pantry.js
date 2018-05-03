import React, { Component } from 'react';
import { connect } from 'react-redux';
import PantryItem from './PantryItem/PantryItem';

// This component is a virtual representation of a given user's kitchen Pantry and all food items currently stored there

class Pantry extends Component {

    render() {
        // Alias the Redux foodReducer state as allItems (for clarity) which is an array of all food items held by a given user
        let allItems = this.props.reduxState.foodReducer;
        // Filter through allItems to pick out only food items stored in the Pantry, store these foods in a new array (pantryList)
        let pantryList = allItems.filter(food => food.location === 'Pantry');
        // Map over freezerList to create new "PantryItem" component instances for each item. Pass each item it's unique props.
        // Alias all instances as a value of a single variable (pantryItems) for clarity below
        let pantryItems = pantryList.map((item) => {
            return(<PantryItem key={item.id} item={item} />)
        })

        return(
            // Display all Pantry items on DOM by referencing our aliased components variable, freezerItems
            <div>
                {pantryItems}
            </div>
        )
    }
}

// connect component to Redux, giving it access to the state of foodReducer
const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(Pantry);