import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../RecipeSearch/RecipeSearch.css';

// This component is the representation of each food item in a user's Kitchen.
// Specifically, it exists so users can select individual ingredients they posess to include in their recipe search

class FoodItem extends Component {
    constructor(props){
        super(props);
        // Establish a local state to toggle whether or not this item has been selected by user for recipe search
        this.state=({
            isSelected: false
        });
    };

    // Toggle whether or not this item is selected by user, call functions below based on isSelected
    toggleItemSelect = () => {
        if(this.state.isSelected === false || this.props.reduxState.yummlyReducer.includes(this.props.item)){
            console.log('selecting');
            
            this.selectItem();
        } else {
            this.deSelectItem();
        }
    }

    // Upon user selection, dispatch item name to Redux yummlyReducer
    // This will add it to the yummlyReducer state, which is a list of all selected ingredients for use in search
    selectItem = () => {
        console.log(this.props.reduxState.yummlyReducer.length);
        if(this.props.reduxState.yummlyReducer.length < 5 ) {
            this.props.dispatch({
                type: 'ADD_SEARCH_ITEM',
                payload: this.props.item.name
            });
            this.setState({
                isSelected: true
            });
        } else {
            alert('Only 5 ingredients allowed!')
        }
    };

    // Upon user de-selection, dispatch item name to Redux yummlyReducer
    // This will remove it from the yummlyReducer state, which is a list of all selected ingredients for use in search
    deSelectItem = () => {
        this.props.dispatch({
            type: 'REMOVE_SEARCH_ITEM',
            payload: this.props.item.name
        });
        this.setState({
            isSelected: false
        });
    };

    render() {
        return(
        
        <div onClick={this.toggleItemSelect} className="ingredientItem">
            <img className="tinyItemImg" src={require(`../images/${this.props.item.image_url}`)} alt="food" />
            <p>{this.props.item.name}</p>
        </div>
        
        )
    }
}

// connect component to Redux, which allows dispatching selected/deselected status to the yummlyReducer
const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(FoodItem);