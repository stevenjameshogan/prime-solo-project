import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../RecipeSearch.css';

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

const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(SelectedRecipe);