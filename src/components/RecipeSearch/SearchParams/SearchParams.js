import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import { triggerLogout } from '../../../redux/actions/loginActions';
import { Home, AccountBox, Kitchen, Search, ArrowBack, ArrowForward, Add, Restaurant } from 'material-ui-icons';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import Input from 'material-ui/Input';
import { Link } from 'react-router-dom';
import '../RecipeSearch.css';

// This component is a page where users can add custom parameters (keywords, exluded ingredients) to their recipe search
// // This page is the second step in the Recipe Search function of the application

class SearchParams extends Component {
    constructor(props) {
        super(props);
        // Establish local state to handle user inputs (keywords), excluded forms
        this.state = ({
            keyword: '',
            excludedFood: '',
            maxTime: '',
            searchParams: {
                keywords: '',
                excludedFoods: ''
            },
            displayParams: {
                keywords: [],
                excludedFoods: []
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
    // Log out user
    logout = () => {
        this.props.dispatch(triggerLogout());
        // this.props.history.push('home');
    }

    // Handle user inputs and reset the local state accordingly
    handleInput = (propertyName) => {
        return (event) => {
            this.setState({
                    ...this.state,
                    [propertyName]: event.target.value,
            })
        }
    }

    // Reset local state after user adds a keyword to the previous state + the new keyword
    // The Yummly API requires very specific formatting for queries so we also concatenate the required keyword characters to our keyword
    addKeyword = () => {
        this.setState({
            searchParams: {...this.state.searchParams, keywords: this.state.searchParams.keywords + '&q=' + this.state.keyword},
            displayParams: {...this.state.displayParams, keywords: [...this.state.displayParams.keywords, this.state.keyword]},
            keyword: ''
        })
    }
    // Reset local state after user adds an exclude to the previous state + the new exclude
    // The Yummly API requires very specific formatting for queries so we also make inputs lower case and concatenate the required keyword characters to our exclude
    addExcludedFood = () => {
        this.setState({
            searchParams: {...this.state.searchParams, excludedFoods:  this.state.searchParams.excludedFoods +
                            'excludedIngredient[]=' + this.state.excludedFood.toLowerCase() + '&' },
            displayParams: {...this.state.displayParams, excludedFoods: [...this.state.displayParams.excludedFoods, this.state.excludedFood]},
            excludedFood: ''
        })
    }

    // Dispatch our local state search parameters along with selected ingredients (stored in yummlyReducer)
    // Dispatch as action to Redux yummlySaga where Yummly API GET request is made
    dispatchSearchTerms = () => {
        this.props.dispatch({
            type: 'GET_RECIPES',
            payload: {searchParams: this.state.searchParams, searchItems: this.props.reduxState.yummlyReducer}
        })
    }

    render() {
        let search = this.state.displayParams;
        let keywords = <br/>
        let excludedFoods = <br/>
        if (search.keywords.length) {
            keywords = search.keywords.map((keyword) => {
                return(<Chip key={keyword} label={keyword}/>)
            })
        } 
        if (search.excludedFoods.length) {
            excludedFoods = search.excludedFoods.map((excludedFood) => {
                return(<Chip key={excludedFood} label={excludedFood}/>)
            })
        } 
        return (
            <div className="pageDiv">
                <div className="kitchenNavDiv">
                    <Link to="/kitchen" onClick={this.clearSearch}><Kitchen style={{fontSize: 40}}/></Link>
                    <AccountBox className="logout" onClick={this.logout} style={{fontSize: 40}}/>
                </div>
                <div className="params">
                    <div className="paramsDiv">
                        <h2>Add Keywords</h2>
                        <p>(Up to 3)</p>
                        <Input value={this.state.keyword} placeholder="ex. pasta, spicy, etc" onChange={this.handleInput("keyword")}/>
                        <Button variant="fab" onClick={this.addKeyword}><Add/></Button><br/>
                        {keywords}
                        <br/><br/>
                        <h2>Exclude Foods</h2>
                        <p>(Up to 3)</p>
                        <Input value={this.state.excludedFood} placeholder="ex. dairy, peanuts, etc" onChange={this.handleInput("excludedFood")}/>
                        <Button variant="fab" onClick={this.addExcludedFood}><Add/></Button><br/>
                        {excludedFoods}
                    </div>
                </div>
                <div className="buttonDiv">
                    <Link to="/itemselect" ><Button variant="raised" color="primary" style={{fontSize: 17}}
                        className="bottomBtn" ><ArrowBack/>Edit Ingredients</Button></Link>
                    <Link to="/recipelist"><Button variant="raised" color="primary" style={{fontSize: 17}}
                        className="bottomBtn" onClick={this.dispatchSearchTerms}>Find Recipes!<Restaurant/></Button></Link>
                </div>
            </div>
            )
    }
}

// connect component to Redux, giving it access to the yummlyReducer and ability to dispatch to yummly Saga
const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
  });

// this allows us to use <App /> in index.js
export default connect(mapReduxStateToProps)(SearchParams);