import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog, { DialogContent, DialogTitle} from 'material-ui/Dialog';
// import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog';
import moment from 'moment';
  

class PantryItem extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            open: false,
            editMode: false,
            foodItem: {
                name: this.props.item.name,
                quantity: this.props.item.quantity,
                category: this.props.item.category,
                location: this.props.item.location,
                notes: this.props.item.notes
            }
        })
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({ open: false });
    };
     // toggles edit mode, for component render logic below
    toggleEditClick = () => {
        this.setState({
            editMode: !this.state.editMode
        })   
    }

     // save/capture user inputs so if a reflection is edited we have the new inputs
    handleInput = (propertyName) => {
        return (event) => {
            this.setState({
                foodItem: {
                    ...this.state.foodItem,
                    [propertyName]: event.target.value
                }
            })
        }
    };

    updateItem = (event) => {
        event.preventDefault();
        this.setState({ 
            open: false,
            editMode: false
        });
    }

    deleteItem = () => {
        this.props.dispatch({
            type: 'DELETE_ITEM',
            payload: this.props.item
        })
    }
    
    render() {
        let expDate = moment(this.props.item.exp_date).format('MMM Do YYYY');
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
                        {/* <DialogTitle>{this.props.item.name}</DialogTitle> */}
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
                                <button onClick={this.toggleEditClick}>Back</button>
                                <button onClick={this.updateItem}>Save</button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            )
        }
    }
}

const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
  });

// this allows us to use <App /> in index.js
export default connect(mapReduxStateToProps)(PantryItem);