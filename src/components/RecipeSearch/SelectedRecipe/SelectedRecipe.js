import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../RecipeSearch.css';

// This component displays more details about a user-selected recipe (selected from results of Yummly Recipe search)

class SelectedRecipe extends Component {

    render() {
        let recipe = this.props.reduxState.selectedRecipeReducer;
        return (
            <div className="recipeDiv">
                <pre>Recipe Details</pre>
                <p>{recipe.name}</p>
                {/* <p>{recipe.source}</p>} */}
            </div>
        )
    }
}

// connect component to Redux in order to retrieve this selected recipe from the selectedRecipeReducer
const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(SelectedRecipe);