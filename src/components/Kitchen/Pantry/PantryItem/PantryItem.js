import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog, { DialogContent, DialogTitle} from 'material-ui/Dialog';
// import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog';
import moment from 'moment';
  
// This component references a specific food item currently stored in the user's Pantry.
// This was created in the parent component (Pantry) via the Map funtion and passed it's unique data

class PantryItem extends Component {
    constructor(props) {
        super(props);
        // Establish a local state
        this.state = ({
            // Boolean value to determine if UI Dialogue is displayed or not
            open: false,
            // Boolean value to determine if component is being edited or not
            editMode: false,
            // Create object for potential user changes to this PantryItem. Set default values as original values passed as props.
            foodItem: {
                id: this.props.item.id,
                name: this.props.item.name,
                quantity: this.props.item.quantity,
                category: this.props.item.category,
                location: this.props.item.location,
                notes: this.props.item.notes
            }
        })
    };


    // Toggle local state "open" value to open or close the pop-up UI Dialog
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({ open: false });
    };

    // Toggle local state "editMode" value, this determines what is rendered on the DOM below
    toggleEditClick = () => {
        this.setState({
            editMode: !this.state.editMode
        })   
    };

     // Capture user inputs so if this Pantry item is edited we can store the new inputs in our local state
    handleInput = (propertyName) => {
        return (event) => {
            // Reset state as the previous state + the updated given property being changed by user
            this.setState({
                foodItem: {
                    ...this.state.foodItem,
                    [propertyName]: event.target.value
                }
            })
        }
    };

    // Dispatch updated Pantry Item to a Redux Saga in order to update database and DOM display
    updateItem = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'UPDATE_ITEM',
            payload: this.state.foodItem
        })
        // Toggle state booleans to close UI Dialog and Edit form
        this.setState({ 
            open: false,
            editMode: false
        });
    };

    // Dispatch Pantry Item to a Redux Saga to delete this item from database and update DOM
    deleteItem = () => {
        this.props.dispatch({
            type: 'DELETE_ITEM',
            payload: this.props.item
        })
    }
    
    render() {
        let expDate = moment(this.props.item.exp_date).format('MMM Do YYYY');
        // If user is not editing this item, display item details on DOM
        if (!this.state.editMode) {
            return (
                <div>
                    <p onClick={this.handleClickOpen}>{this.props.item.name}</p>
                    <Dialog open={this.state.open} onClose={this.handleClose}>
                        <DialogTitle>{this.props.item.name}</DialogTitle>
                        <DialogContent>
                                <p>Quantity/Servings: {this.props.item.quantity}</p>
                                <p>Expiration Date: {expDate}</p>
                                <p>Category: {this.props.item.category}</p>
                                <p>Location: {this.props.item.location}</p>
                                <p>Notes: {this.props.item.notes}</p>
                                {/* Closes edit display via toggling editMode boolean */}
                                <button onClick={this.toggleEditClick}>Edit</button>
                                <button onClick={this.deleteItem}>Remove</button>
                        </DialogContent>
                    </Dialog>
                </div>
            )
        } else {
            return(
                <div>
                    <p onClick={this.handleClickOpen}>{this.props.item.name}</p>
                    <Dialog open={this.state.open} onClose={this.handleClose}>
                        <DialogContent>
                            <form>
                                <input value={this.state.foodItem.name} placeholder={this.props.item.name} onChange={this.handleInput("name")}></input>
                                <input value={this.state.foodItem.quantity}  placeholder={this.props.item.quantity}
                                    onChange={this.handleInput("quantity")}></input>
                                <select value={this.state.foodItem.category} onChange={this.handleInput("category")}>
                                    <option value="" selected disabled hidden>Category</option>
                                    <option>Vegetables</option>
                                    <option>Meat</option>
                                    <option>Dairy</option>
                                </select>
                                <select value={this.state.foodItem.location} onChange={this.handleInput("location")}>
                                    <option value="" selected disabled hidden>Choose Location</option>
                                    <option>Fridge</option>
                                    <option>Freezer</option>
                                    <option>Pantry</option>
                                </select>
                                <input value={this.state.foodItem.notes} placeholder={this.props.item.notes} onChange={this.handleInput("notes")}></input>
                                {/* Closes edit display via toggling editMode boolean */}
                                <button onClick={this.toggleEditClick}>Back</button>
                                {/* Save any changed values to database by calling updateItem function */}
                                <button onClick={this.updateItem}>Save</button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            )
        }
    }
}

// connect component to Redux in order to dispatch PUT and DELETE requests
const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
  });

// this allows us to use <App /> in index.js
export default connect(mapReduxStateToProps)(PantryItem);