import React, { Component } from 'react';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import { triggerLogout } from '../../../redux/actions/loginActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../RecipeSearch/RecipeSearch.css'
import FoodItem from './FoodItem/FoodItem';

class FoodList extends Component {

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
    
    logout = () => {
        this.props.dispatch(triggerLogout());
        // this.props.history.push('home');
    }

    render() {
        let allFoods = this.props.reduxState.foodReducer;
        let foodItems = allFoods.map((item) => {
            return(<FoodItem key={item.id} item={item} selectItem={this.selectItem} />)
        })
        return (
        <div className="recipeDiv">
            <button className="logout" onClick={this.logout}>Log Out</button>
            <h1>Step 1 - Select Ingredients</h1>
            {foodItems}
            <button><Link to="/kitchen">Back to Kitchen</Link></button>
            <button><Link to="/searchparams">Next</Link></button>
        </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(FoodList);