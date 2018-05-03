import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../RecipeSearch.css';

// This component references a specific recipe found via our Yummly API recipe search
// This was created in the parent component (RecipeList) via the Map funtion and passed it's unique data

class RecipeItem extends Component {

    // If user selects this recipe, dispatch unique id to yummlySaga to make Yummly API GET request for more details
    selectRecipe = () => {
        this.props.dispatch({
            type: 'GET_SELECTED_RECIPE',
            payload: this.props.recipe.id
        })
    }

    render() {
        // Alias recipe url as "recipePic" for code clarity
        let recipePic = this.props.recipe.smallImageUrls[0];
        // Use split() function to splice the '90' from the image url (stands for 90px which is too small), creates splitPic array
        let splitPic = recipePic.split('90');
        // Concatenate a larger number to splitPic url to return a larger image, store url in 'biggerPic' variable
        let biggerPic = splitPic[0] + '200';

        return(
        <div className="resultDiv" onClick={this.selectRecipe}>
            <p>{this.props.recipe.recipeName}</p>
            <img src={biggerPic} alt="Recipe" className="recipeImage"/>
            <button><Link to="/selectedrecipe">Details</Link></button>
        </div>
        )
    }
}

// connect component to Redux in order to dispatch this recipe's unique id to the yummlySaga to use in API request
const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(RecipeItem);