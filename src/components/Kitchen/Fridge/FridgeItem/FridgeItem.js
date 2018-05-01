import React, { Component } from 'react';
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle, withMobileDialog,} from 'material-ui/Dialog';
import moment from 'moment';
  

class FridgeItem extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            open: false,
            editMode: false,
            fridgeItem: {
                name: '',
                quantity: '',
                category: '',
                location: '',
                notes: ''
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

    //  // save/capture user inputs so if a reflection is edited we have the new inputs
    // handleEditInput = (propertyName) => {
    //     return (event) => {
    //         this.setState({
    //             reflectionInputs: {
    //                 ...this.state.reflectionInputs,
    //                 [propertyName]: event.target.value
    //             }
    //         })
    //     }
    // };
    
    render() {
        let expDate = moment(this.props.item.dexp_ate).format('MMM Do YYYY');
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
                                <button>Remove</button>
                        </DialogContent>
                    </Dialog>
                </div>
            )
        } else {
            return(
                <div>
                    <p onClick={this.handleClickOpen}>{this.props.item.name}</p>
                    <Dialog open={this.state.open} onClose={this.handleClose}>
                        <DialogTitle>{this.props.item.name}</DialogTitle>
                        <DialogContent>
                            <button onClick={this.toggleEditClick}>Back</button>
                            <button>Submit</button>
                        </DialogContent>
                    </Dialog>
                </div>
            )
        }
    }
}

export default FridgeItem;