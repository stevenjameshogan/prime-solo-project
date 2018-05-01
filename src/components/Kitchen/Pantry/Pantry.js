import React, { Component } from 'react';
import { connect } from 'react-redux';
import PantryItem from './PantryItem/PantryItem';

class Pantry extends Component {

    render() {
        let allItems = this.props.reduxState.foodReducer;
        let pantryList = allItems.filter(food => food.location === 'Pantry');
        let pantryItems = pantryList.map((item) => {
            return(<PantryItem key={item.id} item={item} />)
        })


        return(
            <div>
                {pantryItems}
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(Pantry);