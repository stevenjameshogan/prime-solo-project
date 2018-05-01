import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import { triggerLogout } from '../../../redux/actions/loginActions';
import { Link } from 'react-router-dom';
import '../Kitchen.css'

class AddFoodForm extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            newFood: {
                name: '',
                quantity: '',
                category: '',
                location: '',
                notes: ''
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

    addFood = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'POST_ITEM',
            payload: this.state.newFood
        })
        this.setState({
            newFood: {
                name: '',
                quantity: '',
                category: '',
                location: '',
                notes: ''
            }
        })
        
    }

    handleInput = (propertyName) => {
        return (event) => {          
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
            <button onClick={this.alert}>Add</button>
            <br/>
            <button><Link to="/kitchen">Back to Kitchen</Link></button>
            <button><Link to="/itemselect">Find Recipe</Link></button>
            
        </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
  });

// this allows us to use <App /> in index.js
export default connect(mapReduxStateToProps)(AddFoodForm);