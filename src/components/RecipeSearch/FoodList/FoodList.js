import React, { Component } from 'react';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import { triggerLogout } from '../../../redux/actions/loginActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Home, AccountBox, Kitchen, Search, ArrowBack, ArrowForward } from 'material-ui-icons';
import Button from 'material-ui/Button';
import FoodItem from './FoodItem/FoodItem';
import '../../RecipeSearch/RecipeSearch.css'

// This component displays all of a user's current food items, which can be individually selected to include as ingredients in a recipe search
// This page is the first step in the Recipe Search function of the application

class FoodList extends Component {

    // On page load, make a Redux dispatch to GET all food items belonging to the current user
    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch({
          type: 'GET_ITEMS'
        })
    }
    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('home');
        }
    }
    // Log out user
    logout = () => {
        this.props.dispatch(triggerLogout());
        // this.props.history.push('home');
    }

    // Dispatches the yummlyReducer to clear it's state. This allows the user to start a search from scratch
    clearSearch = () => {
        this.props.dispatch({
            type: 'CLEAR_SEARCH_PARAMS'
        })
    }

    render() {
        // Alias the Redux foodReducer state as allFoods (for clarity) which is an array of all food items held by a given user
        let allFoods = this.props.reduxState.foodReducer;
        // Map over allFoods to create new "FoodItem" component instances for each food item. Pass each item it's unique props.
        // Alias all instances as a value of a single variable (foodItems) for visual clarity below
        let foodItems = allFoods.map((item) => {
            return(<FoodItem key={item.id} item={item} selectItem={this.selectItem} />)
        })

        return (
        <div className="recipeDiv">
            <Link to="/kitchen" onClick={this.clearSearch}><Home/></Link>
            <AccountBox className="logout" onClick={this.logout}/>
            <h2>Select Ingredients</h2>
            {/* Display all food items on DOM by referencing our aliased components variable, foodItems */}
            {foodItems}
            <h4>{JSON.stringify(this.props.reduxState.yummlyReducer)}</h4>
            <div className="buttonDiv">
                <Link to="/kitchen"><button onClick={this.clearSearch}><ArrowBack/>Back to Kitchen</button></Link>
                <Link to="/searchparams"><button>Next Step<ArrowForward/></button></Link>
            </div>
        </div>
        )
    }
}

// connect component to Redux, giving it access to the state of foodReducer where selected ingredients persist
const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(FoodList);