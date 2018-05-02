import React, { Component } from 'react';
import '../../RecipeListPage/RecipeListPage.css'

class FoodItem extends Component {
    render() {
        return(
        
        <div>
            <div className="foodItem">{this.props.item.name}</div>
        </div>
        
        )
    }
}

export default FoodItem;