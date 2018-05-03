import React, { Component } from 'react';
import { connect } from 'react-redux';
import FreezerItem from './FreezerItem/FreezerItem';

// This component is a virtual representation of a given user's kitchen Freezer and all food items currently stored there

class Freezer extends Component {

    render() {
        // Alias the Redux foodReducer state as allItems (for clarity) which is an array of all food items held by a given user
        let allItems = this.props.reduxState.foodReducer;
        // Filter through allItems to pick out only food items stored in the Freezer, store these foods in a new array (freezerList)
        let freezerList = allItems.filter(food => food.location === 'Freezer');
        // Map over freezerList to create new "FreezerItem" component instances for each item. Pass each item it's unique props.
        // Alias all instances as a value of a single variable (freezerItems) for clarity below
        let freezerItems = freezerList.map((item) => {
            return(<FreezerItem key={item.id} item={item} />)
        })

        return(
            // Display all Freezer items on DOM by referencing our aliased components variable, freezerItems
            <div>
                {freezerItems}
            </div>
        )
    }
}

// connect component to Redux, giving it access to the state of foodReducer
const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(Freezer);