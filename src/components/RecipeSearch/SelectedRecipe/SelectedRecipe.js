import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Kitchen, AccountBox, ArrowBack } from 'material-ui-icons';
import '../RecipeSearch.css';
import { RingLoader } from 'react-spinners';
import Button from 'material-ui/Button';

// This component displays more details about a user-selected recipe (selected from results of Yummly Recipe search)

class SelectedRecipe extends Component {

    render() {
        // Alias our recipe as "recipe" for code clarity
        let recipe = this.props.reduxState.selectedRecipeReducer;
        console.log(recipe.ingredientLines);
        let ingredients = recipe.ingredientLines.map((ingredient) => {
            return(<p key={ingredient}>{ingredient}</p>)
        })
        if (recipe.images) {
            return (
                <div className="pageDiv">
                    <div>
                        <Link to="/kitchen" onClick={this.clearSearch}><Kitchen style={{fontSize: 40}}/></Link>
                        <AccountBox className="logout" onClick={this.logout} style={{fontSize: 40}}/>
                    </div>
                    <div className="recipeDiv">
                        <h1>{recipe.name}</h1>
                        <img src={recipe.images[0].hostedLargeUrl} alt="Delicious Recipe Pic" />
                        <p>Prep Time: {recipe.prepTime}</p>
                        <p>Total Time: {recipe.totalTime}</p>
                        <p>Makes {recipe.numberOfServings} Servings</p>
                        <p>Ingredients:</p>
                        {ingredients}
                        <div className="buttonDiv">
                            <Link to="/recipelist" onClick={this.props.handleClose}><Button variant="raised" color="primary" className="bottomBtn">Back to Results</Button></Link>
                            <Button variant="raised" color="primary" className="bottomBtn"><a href={recipe.source.sourceRecipeUrl}>Go to Recipe!</a></Button>
                        </div>
                    </div>
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