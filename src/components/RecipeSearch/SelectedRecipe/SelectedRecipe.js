import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../RecipeSearch.css';
import { RingLoader } from 'react-spinners';
import Button from 'material-ui/Button';

// This component displays more details about a user-selected recipe (selected from results of Yummly Recipe search)

class SelectedRecipe extends Component {


    render() {
        // Alias our recipe as "recipe" for code clarity
        let recipe = this.props.reduxState.selectedRecipeReducer;
        console.log(recipe);
        if (recipe.images) {
            return (
                <div className="recipeDiv" id="selectedRecipe">
                    <h1>{recipe.name}</h1>
                    <img src={recipe.images[0].hostedLargeUrl} alt="Delicious Recipe Pic" />
                    <p>Prep Time: {recipe.prepTime}</p>
                    <p>Total Time: {recipe.totalTime}</p>
                    <p>Makes {recipe.numberOfServings} Servings</p>
                    <p>Ingredients:</p>
                    <ul>
                        <li>{recipe.ingredientLines[0]}</li>
                        <li>{recipe.ingredientLines[1]}</li>
                        <li>{recipe.ingredientLines[2]}</li>
                    </ul>

                    <Link to="/recipelist" onClick={this.props.handleClose}><Button variant="raised" color="primary">Back to Results</Button></Link>
                    <Button variant="raised" color="primary"><a href={recipe.source.sourceRecipeUrl}>Go to Recipe!</a></Button>
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