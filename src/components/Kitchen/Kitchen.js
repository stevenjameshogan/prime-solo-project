import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import { Link } from 'react-router-dom';
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails,} from 'material-ui/ExpansionPanel';
import Dialog, { DialogContent, DialogTitle} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import Fridge from './Fridge/Fridge';
import Freezer from './Freezer/Freezer';
import Pantry from './Pantry/Pantry';
import moment from 'moment';
import './Kitchen.css';

// This component is a virtual representation of a given user's Kitchen and all food items currently held by the user.
// This page is primarily a container for our Freezer, Fridge, and Pantry subcomponents

class Kitchen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }

  // Toggle local state "open" value to open or close the pop-up UI Dialog
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
      this.setState({ open: false });
  };
  // On page load, make a Redux dispatch to GET all food items belonging to a particular user
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({
      type: 'GET_ITEMS'
    });
   
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  // Log user out
  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }


  render() {
    let date = moment();
    let expiringItems = this.props.reduxState.expDateReducer.map((item) => {
    return(<p key={item.id}>{item.name} ({item.quantity})</p>)
    })

    if (this.props.reduxState.expDateReducer.length) {
      return (
        <div className="kitchenDiv">
          <Link to="/kitchen"><button>Home</button></Link>
          <button className="logout" onClick={this.logout}>Log Out</button>
          <Dialog open={this.state.open} onClose={this.handleClose}>
            <DialogTitle>Expiring food!</DialogTitle>
            <DialogContent>
                {expiringItems}
                <Link to="/itemselect"><button>Quick Search!</button></Link>
                <button onClick={this.handleClose}>Got it</button>
            </DialogContent>
          </Dialog>
          <h1>Welcome to your Kitchen, { this.props.user.userName }!</h1>
          {/* Categorize food items based on stored location. On click, each panel will open to reveal the
           given user's food items stored in that location */}
          <div>
            {/* Freezer Panel */}
            <ExpansionPanel className="panel">
                <ExpansionPanelSummary>
                    <Typography>Freezer</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* Contents of the panel are nested in the Freezer subcomponent, where the food item data lies */}
                    <Freezer />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            {/* Fridge Panel */}
            <ExpansionPanel className="panel">
                <ExpansionPanelSummary>
                    <Typography>Fridge</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* Contents of the panel are nested in the Fridge subcomponent, where the food item data lies */}
                    <Fridge />
                </ExpansionPanelDetails>
            </ExpansionPanel >
            {/* Pantry Panel */}
            <ExpansionPanel className="panel">
                <ExpansionPanelSummary>
                    <Typography>Pantry</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* Contents of the panel are nested in the Pantry subcomponent, where the food item data lies */}
                    <Pantry />
                </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          {/* Navigational links to Add Foot items to this Kitchen or Find recipes based on items in Kitchen */}
          <Link to="/addfood"><button>Add Food</button></Link>
          <Link to="/itemselect"><button>Find Recipe</button></Link>
        </div>
      );
    } else {
      return (
        <div className="kitchenDiv">
          <Link to="/kitchen"><button>Home</button></Link>
          <button className="logout" onClick={this.logout}>Log Out</button>
          <h1>Welcome to your Kitchen, { this.props.user.userName }!</h1>
          {/* Categorize food items based on stored location. On click, each panel will open to reveal the
           given user's food items stored in that location */}
          <div>
            {/* Freezer Panel */}
            <ExpansionPanel className="panel">
                <ExpansionPanelSummary>
                    <Typography>Freezer</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* Contents of the panel are nested in the Freezer subcomponent, where the food item data lies */}
                    <Freezer />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            {/* Fridge Panel */}
            <ExpansionPanel className="panel">
                <ExpansionPanelSummary>
                    <Typography>Fridge</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* Contents of the panel are nested in the Fridge subcomponent, where the food item data lies */}
                    <Fridge />
                </ExpansionPanelDetails>
            </ExpansionPanel >
            {/* Pantry Panel */}
            <ExpansionPanel className="panel">
                <ExpansionPanelSummary>
                    <Typography>Pantry</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* Contents of the panel are nested in the Pantry subcomponent, where the food item data lies */}
                    <Pantry />
                </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          {/* Navigational links to Add Foot items to this Kitchen or Find recipes based on items in Kitchen */}
          <Link to="/addfood"><button>Add Food</button></Link>
          <Link to="/itemselect"><button>Find Recipe</button></Link>
        </div>
      );
    }
  }
}

// connect component to Redux, giving it access to the state of all reducers (all our persistent data)
const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
  });

// this allows us to use <App /> in index.js
export default connect(mapReduxStateToProps)(Kitchen);

