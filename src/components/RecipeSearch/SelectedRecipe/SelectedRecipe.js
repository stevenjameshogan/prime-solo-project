import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../RecipeSearch.css';
import { RingLoader } from 'react-spinners';

// This component displays more details about a user-selected recipe (selected from results of Yummly Recipe search)

class SelectedRecipe extends Component {


    render() {
        // Alias our recipe as "recipe" for code clarity
        let recipe = this.props.reduxState.selectedRecipeReducer;
        console.log(recipe);
        // If we have recieved all of the data-rich recipe details (images) from the API request, display all on DOM
        if (recipe.images) {
            return (
                <div className="recipeDiv">
                    <h1>{recipe.name}</h1>
                    <img src={recipe.images[0].hostedLargeUrl} alt="Delicious Recipe Pic" />
                    {/* <Link to="/recipelist"><button>Back to Recipe List</button></Link> */}
                    <Link to="/recipelist"><button>Back to Recipes</button></Link>
                    <button><a href={recipe.source.sourceRecipeUrl}>Go to Recipe!</a></button>
                </div>
            )
        } else {
            return (
                <div className="recipeDiv">
                    <RingLoader />
                </div>
            )
        }
    }
}

// connect component to Redux in order to retrieve this selected recipe from the selectedRecipeReducer
const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(SelectedRecipe);