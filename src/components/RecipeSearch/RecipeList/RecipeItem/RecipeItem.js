import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../RecipeSearch.css';


class RecipeItem extends Component {

    selectRecipe = () => {
        this.props.dispatch({
            type: 'GET_SELECTED_RECIPE',
            payload: this.props.recipe.id
        })
    }
    render() {
        let recipePic = this.props.recipe.smallImageUrls[0];
        let splitPic = recipePic.split('90');
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

const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(RecipeItem);