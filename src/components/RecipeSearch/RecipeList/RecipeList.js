import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem/RecipeItem';
import { Kitchen, AccountBox, ArrowBack } from 'material-ui-icons';
import Button from 'material-ui/Button';
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import '../RecipeSearch.css';

// This component displays all recipes (10 max) found via the Yummly API search (based on user-defined ingredients and parameters)
// This page is the third step in the Recipe Search function of the application

class RecipeList extends Component {

    clearSearch = () => {
        this.props.dispatch({
            type: 'CLEAR_SEARCH_PARAMS'
        })
    }

    render() {
        // Map over state of recipeResultsReducer to create new "RecipeItem" instances for each found recipe. Pass each item it's unique props.
        // Alias all instances as a value of a single variable (foodItems) for visual clarity below
        let recipeList = this.props.reduxState.recipeResultsReducer.map((recipe) => {
            return(<RecipeItem key={recipe.id} recipe={recipe} />)
        })
        if (this.props.reduxState.recipeResultsReducer.length) {
            return(
                <div className="pageDiv">
                    <div className="resultsDiv">
                        <div>
                            <div className="kitchenNavDiv">
                                <Link to="/kitchen" onClick={this.clearSearch}><Kitchen style={{fontSize: 40}}/></Link>
                                <AccountBox className="logout" onClick={this.logout} style={{fontSize: 40}}/>
                            </div> 
                            <h1>Select Recipe!</h1>
                            {/* Display recipes on DOM by referencing our aliased components variable, recipeList */}
                            {recipeList}
                        </div>
                        <div className="buttonDiv">
                            <Link to="/searchparams"><Button variant="raised" color="primary" className="bottomBtn">
                                <ArrowBack/>Edit Search</Button></Link>
                            <Link to="/selectedrecipe"><Button variant="raised" color="primary" className="bottomBtn">Recipe Details!</Button>
                                </Link>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="pageDiv">
                    <div className="resultsDiv">
                        <div className="kitchenNavDiv">
                            <Link to="/kitchen" onClick={this.clearSearch}><Kitchen style={{fontSize: 40}}/></Link>
                            <AccountBox className="logout" onClick={this.logout} style={{fontSize: 40}}/>
                        </div> 
                        <div className="spinner">
                            <h1>Fetching Recipes...</h1>
                            <RingLoader />
                        </div>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <div className="buttonDiv">
                            <Link to="/searchparams"><Button variant="raised" color="primary" style={{fontSize: 17}}
                                className="bottomBtn"> <ArrowBack/>Edit Search</Button></Link>
                            <Link to="/selectedrecipe"><Button variant="raised" color="primary" style={{fontSize: 17}}
                                className="bottomBtn">Recipe Details!</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
}

// connect component to Redux, giving it access to the state of recipeResultsReducer where Yummy search results persist
const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(RecipeList);