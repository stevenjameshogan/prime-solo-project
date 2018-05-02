import React, { Component } from 'react';
import '../../../RecipeSearch/RecipeSearch.css';

class FoodItem extends Component {
    constructor(props){
        super(props)
    }

    handleSelectItem = () => {
        console.log(this.props.item);
        this.props.selectItem(this.props.item)
    }

    render() {
        return(
        
        <div onClick={this.handleSelectItem} className="foodItem">
            <p>{this.props.item.name}</p>
        </div>
        
        )
    }
}

export default FoodItem;