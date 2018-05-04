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
        // let ingredients = recipe.ingredientLines.map((ingredient) => {
        //     return(<p>Hello</p>)
        // });
        // If we have recieved all of the data-rich recipe details (images) from the API request, display all on DOM
        if (recipe.images) {
            return (
                <div className="recipeDiv" id="selectedRecipe">
                    <Link to="/kitchen"><button>Home</button></Link>
                    <button className="logout" onClick={this.logout}>Log Out</button><br/><br/>
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
                        <li>{recipe.ingredientLines[3]}</li>
                    </ul>

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