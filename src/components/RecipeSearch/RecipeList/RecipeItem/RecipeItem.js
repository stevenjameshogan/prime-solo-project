import React, { Component } from 'react';
import '../../RecipeSearch.css';
import { Link } from 'react-router-dom';

class RecipeItem extends Component {
    test = () => {
        let recipePic = this.props.recipe.smallImageUrls[0];
        console.log(recipePic);
        let splitPic = recipePic.split('90');
        console.log(splitPic);
        let biggerPic = splitPic[0] + '300';
        console.log(biggerPic);
    }

    render() {
        let recipePic = this.props.recipe.smallImageUrls[0];
        let splitPic = recipePic.split('90');
        let biggerPic = splitPic[0] + '300';
        return(
        <div className="resultDiv">
            <p>{this.props.recipe.recipeName}</p>
            <img src={biggerPic} alt="Recipe" className="recipeImage"/>
            <button onClick={this.test}>Test</button>
        </div>
        )
    }
}

export default RecipeItem;