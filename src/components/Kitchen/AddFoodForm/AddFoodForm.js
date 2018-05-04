import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import { triggerLogout } from '../../../redux/actions/loginActions';
import { Link } from 'react-router-dom';
import '../Kitchen.css'

// This component serves as a submission form for a given user to add a new food item to their Kitchen

class AddFoodForm extends Component {
    constructor(props) {
        super(props);
        // Establish a local state in order to store our new food item based on user inputs
        this.state = ({
            newFood: {
                name: '',
                quantity: '',
                category: '',
                location: '',
                notes: ''
            }
        })
    };

    // Determine user upon page load
    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    };
    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    };
    // Log out user
    logout = () => {
        this.props.dispatch(triggerLogout());
        // this.props.history.push('home');
    };

    // Dispatch our new food item via action to a Redux Saga in order to add to database and display on DOM
    addFood = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'POST_ITEM',
            payload: this.state.newFood
        })
        // Clear input fields after dispatching
        this.setState({
            newFood: {
                name: '',
                quantity: '',
                category: '',
                location: '',
                notes: ''
            }
        })
    };

    // Capture user inputs so we can store in our local state
    handleInput = (propertyName) => {
        return (event) => {          
            // Set state as the previous state + the updated given property added by the user
            this.setState({
                newFood: {
                    ...this.state.newFood,
                    [propertyName]: event.target.value,
                }
            })
        }
    }

    render() {
        return (
        <div className="kitchenDiv">
            <button className="logout" onClick={this.logout}>Log Out</button>
            <h1>Add Food Form</h1>
            <form onSubmit={this.addFood}>
                <input value={this.state.newFood.name} placeholder="Name" onChange={this.handleInput("name")}></input>
                <input value={this.state.newFood.quantity}  placeholder="Quantity/Servings" 
                       onChange={this.handleInput("quantity")}></input>
                <select value={this.state.newFood.category} onChange={this.handleInput("category")}>
                    <option value="" selected disabled hidden>Category</option>
                    <option>Vegetables</option>
                    <option>Meat</option>
                    <option>Dairy</option>
                </select>
                <select value={this.state.newFood.location} onChange={this.handleInput("location")}>
                    <option value="" selected disabled hidden>Choose Location</option>
                    <option>Fridge</option>
                    <option>Freezer</option>
                    <option>Pantry</option>
                </select>
                <input value={this.state.newFood.notes} placeholder="Notes" onChange={this.handleInput("notes")}></input>
                <button type="submit">Submit</button>
            </form>
            <br/>
            <Link to="/kitchen"><button>Back to Kitchen</button></Link>
            <Link to="/itemselect"><button>Find Recipe</button></Link>
        </div>
        )
    }
}

// connect component to Redux in order to dispatch our added food items for storage in database
const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
  });

// this allows us to use <App /> in index.js
export default connect(mapReduxStateToProps)(AddFoodForm);