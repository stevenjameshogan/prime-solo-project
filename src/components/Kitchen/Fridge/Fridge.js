import React, { Component } from 'react';
import { connect } from 'react-redux';
import FridgeItem from './FridgeItem/FridgeItem';

class Fridge extends Component {


    render() {
        let allItems = this.props.reduxState.foodReducer;
        // console.log(allItems);
        
        let fridgeList = allItems.filter(food => food.location === 'Fridge');
        let fridgeItems = fridgeList.map((item) => {
            return(<FridgeItem key={item.id} item={item} />)
        })

        return(
            <div>
                {fridgeItems}
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(Fridge);