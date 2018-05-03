import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import { triggerLogout } from '../../../redux/actions/loginActions';
import { Link } from 'react-router-dom';
import '../RecipeSearch.css';

class SearchParamsPage extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            keyword: '',
            excludedFood: '',
            maxTime: '',
            searchParams: {
                keywords: '',
                excludedFoods: '',
                maxTime: ''
            }
        })
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
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

    handleInput = (propertyName) => {
        return (event) => {
            this.setState({
                    ...this.state,
                    [propertyName]: event.target.value,
            })
        }
    }


    addKeyword = () => {
        this.setState({
            searchParams: {...this.state.searchParams, keywords: this.state.searchParams.keywords + '&q=' + this.state.keyword},
            keyword: ''
        })
    }

    addExcludedFood = () => {
        this.setState({
            searchParams: {...this.state.searchParams, excludedFoods:  this.state.searchParams.excludedFoods +
                            'excludedIngredient[]=' + this.state.excludedFood.toLowerCase() + '&' },
            excludedFood: ''
        })
    }

    dispatchSearchTerms = () => {
        this.props.dispatch({
            type: 'GET_RECIPES',
            payload: {searchParams: this.state.searchParams, searchItems: this.props.reduxState.yummlyReducer}
        })
    }


    render() {
        return (
        <div className="recipeDiv">
            <button className="logout" onClick={this.logout}>Log Out</button>
            <h1>Step 2 - Customize Search</h1>
            <h3>Add Keywords (Up to 3)</h3>
            <input value={this.state.keyword} placeholder="ex. pasta, spicy, etc" onChange={this.handleInput("keyword")}></input>
            <button onClick={this.addKeyword}>+</button>
            <h3>Exclude Foods (Up to 3)</h3>
            <input value={this.state.excludedFood} placeholder="ex. dairy, peanuts, etc" onChange={this.handleInput("excludedFood")}></input>
            <button onClick={this.addExcludedFood}>+</button>
            {/* <h3>Max Cook Time</h3>
            <select value={this.state.maxTime} onChange={this.handleInput("maxTime")}>
                <option value="" selected disabled hidden>Max Cook Time</option>
                <option>30 Minutes</option>
                <option>60 Minutes</option>
                <option>90 Minutes</option>
                <option>2 Hours</option>
            </select> */}
            <pre>{JSON.stringify(this.props.reduxState.yummlyReducer)}</pre>
            <button><Link to="/itemselect">Edit Ingredients</Link></button>
            <button onClick={this.dispatchSearchTerms}><Link to="/recipelist">Find Recipes!</Link></button>
        </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
  });

// this allows us to use <App /> in index.js
export default connect(mapReduxStateToProps)(SearchParamsPage);