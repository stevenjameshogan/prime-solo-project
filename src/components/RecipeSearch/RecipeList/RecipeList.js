import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem/RecipeItem';
import { Link } from 'react-router-dom';
import '../RecipeSearch.css';

class RecipeList extends Component {

    render() {
        let recipeList = this.props.reduxState.recipeResultsReducer.map((recipe) => {
            return(<RecipeItem key={recipe.id} recipe={recipe} />)
        })
        return(
            <div className="recipeDiv">
                <h1>We Found Recipes!</h1>
                {recipeList}
                <button><Link to="/searchparams">Edit Search</Link></button>
                <button><Link to="/recipeitem">Go</Link></button>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(RecipeList);