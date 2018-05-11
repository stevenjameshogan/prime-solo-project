import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import { triggerLogout } from '../../../redux/actions/loginActions';
import { Kitchen, AccountBox, ArrowBack, Search, Add} from 'material-ui-icons';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import Snackbar from 'material-ui/Snackbar';
import { MenuItem } from 'material-ui/Menu';
import { Link } from 'react-router-dom';
import '../Kitchen.css';


// This component serves as a submission form for a given user to add a new food item to their Kitchen

class AddFoodForm extends Component {
    constructor(props) {
        super(props);
        // Establish a local state in order to store our new food item based on user inputs
        this.state = ({
            open: false,
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

    handleClick = () => {
        console.log('opening');
        
        this.setState({ open: true });
    };
    
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        return (
        <div className="addFoodDiv">
            <Link to="/kitchen" onClick={this.clearSearch} ><Kitchen style={{fontSize: 40}}/></Link>
            <AccountBox className="logout" onClick={this.logout} className="logout" style={{fontSize: 40}} />
            {/* New food submission form */}
            <form onSubmit={this.addFood} className="addFoodForm">
                <h3>Enter Food</h3>
                <Input value={this.state.newFood.name} placeholder="Food Name" onChange={this.handleInput("name")} className="input"/>
                <Input value={this.state.newFood.quantity}  placeholder="Quantity/Servings" onChange={this.handleInput("quantity")} className="input"/>
                <Input value={this.state.newFood.notes} placeholder="Notes" onChange={this.handleInput("notes")} className="input"/>
                <br/>
                <InputLabel className="input">Category</InputLabel><br/>
                <Select value={this.state.newFood.category} onChange={this.handleInput("category")} className="select" >
                    <MenuItem value="Vegetables">Vegetables</MenuItem>
                    <MenuItem value="Fruits">Fruits</MenuItem>
                    <MenuItem value="Meat/Seafood">Meat/Seafood</MenuItem>
                    <MenuItem value="Dairy">Dairy</MenuItem>
                    <MenuItem value="Grains">Grains</MenuItem>
                    <MenuItem value="Sugars">Sugars</MenuItem>
                </Select> <br/>
                <InputLabel className="input">Location</InputLabel><br/>
                <Select value={this.state.newFood.location} onChange={this.handleInput("location")} className="select">
                    <MenuItem value="Fridge">Fridge</MenuItem>
                    <MenuItem value="Freezer">Freezer</MenuItem>
                    <MenuItem value="Pantry">Pantry</MenuItem>
                </Select>
                <br/><br/>
                <Button variant="fab" color="primary" type="submit" style={{float:"right"}} onClick={this.handleClick}>< Add/></Button>
                <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'left',}} open={this.state.open}
                    autoHideDuration={1000} onClose={this.handleClose} message={<span id="message-id">Food added!</span>} />
            </form>
            <br/>
            <div className="buttonDiv">
                <Link to="/kitchen"><Button variant="raised" color="primary" className="bottomBtn">
                    <ArrowBack />Back to Kitchen</Button></Link>
                <Link to="/itemselect"><Button variant="raised" color="primary" className="bottomBtn">Find Recipes<Search />
                    </Button></Link>
            </div>
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