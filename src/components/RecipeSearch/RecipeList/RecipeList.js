import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem/RecipeItem';
import { Link } from 'react-router-dom';
import '../RecipeSearch.css';

// This component displays all recipes (10 max) found via the Yummly API search (based on user-defined ingredients and parameters)
// This page is the third step in the Recipe Search function of the application

class RecipeList extends Component {

    render() {
        // Map over state of recipeResultsReducer to create new "RecipeItem" instances for each found recipe. Pass each item it's unique props.
        // Alias all instances as a value of a single variable (foodItems) for visual clarity below
        let recipeList = this.props.reduxState.recipeResultsReducer.map((recipe) => {
            return(<RecipeItem key={recipe.id} recipe={recipe} />)
        })
        return(
            <div className="recipeDiv">
                <h1>Select Recipe!</h1>
                {/* Display recipes on DOM by referencing our aliased components variable, recipeList */}
                {recipeList}
                <Link to="/searchparams"><button>Edit Search</button></Link>
                <Link to="/selectedrecipe"><button>See Details</button></Link>
            </div>
        )
    }
}

// connect component to Redux, giving it access to the state of recipeResultsReducer where Yummy search results persist
const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(RecipeList);