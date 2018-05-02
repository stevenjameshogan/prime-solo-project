import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../RecipeSearch/RecipeSearch.css';

class FoodItem extends Component {
    constructor(props){
        super(props);
        this.state=({
            isSelected: false
        });
    };

    toggleItemSelect = () => {
        if(this.state.isSelected === false ) {
            this.selectItem();
        } else {
            this.unSelectItem();
        }
    }

    selectItem = () => {
        this.props.dispatch({
            type: 'ADD_SEARCH_ITEM',
            payload: this.props.item
        });
        this.setState({
            isSelected: true
        });
    };

    unSelectItem = () => {
        this.props.dispatch({
            type: 'REMOVE_SEARCH_ITEM',
            payload: this.props.item
        });
        this.setState({
            isSelected: false
        });
    };

    render() {
        return(
        
        <div onClick={this.toggleItemSelect} className="foodItem">
            <p>{this.props.item.name}</p>
        </div>
        
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(FoodItem);