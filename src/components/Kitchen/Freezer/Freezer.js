import React, { Component } from 'react';
import { connect } from 'react-redux';
import FreezerItem from './FreezerItem/FreezerItem';

class Freezer extends Component {


    render() {
        let allItems = this.props.reduxState.foodReducer;
        let freezerList = allItems.filter(food => food.location === 'Freezer');
        let freezerItems = freezerList.map((item) => {
            return(<FreezerItem key={item.id} item={item} />)
        })

        return(
            <div>
                {freezerItems}
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(Freezer);