import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import { Link } from 'react-router-dom';
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails,} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import Fridge from './Fridge/Fridge';
import Freezer from './Freezer/Freezer';
import Pantry from './Pantry/Pantry';
import './Kitchen.css';

// This component is a virtual representation of a given user's Kitchen and all food items currently held by the user.
// This page is primarily a container for our Freezer, Fridge, and Pantry subcomponents

class Kitchen extends Component {

  // On page load, make a Redux dispatch to GET all food item's belonging to a particular user
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

  // Log user out
  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {

    return (
      <div className="kitchenDiv">
        <button className="logout" onClick={this.logout}>Log Out</button>
        <h1>Welcome to your Kitchen, { this.props.user.userName }!</h1>
        {/* Categorize food items based on stored location. On click, each panel will open to reveal the
         given user's food items stored in that location */}
        <div>
          {/* Freezer Panel */}
          <ExpansionPanel>
              <ExpansionPanelSummary>
                  <Typography>Freezer</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                {/* Contents of the panel are nested in the Freezer subcomponent, where the food item data lies */}
                  <Freezer />
              </ExpansionPanelDetails>
          </ExpansionPanel>
          {/* Fridge Panel */}
          <ExpansionPanel>
              <ExpansionPanelSummary>
                  <Typography>Fridge</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                {/* Contents of the panel are nested in the Fridge subcomponent, where the food item data lies */}
                  <Fridge />
              </ExpansionPanelDetails>
          </ExpansionPanel>
          {/* Pantry Panel */}
          <ExpansionPanel>
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
        <button><Link to="/addfood">Add Food</Link></button>
        <button><Link to="/itemselect">Find Recipe</Link></button>
      </div>
    );
  }
}

// connect component to Redux, giving it access to the state of all reducers (all our persistent data)
const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
  });

// this allows us to use <App /> in index.js
export default connect(mapReduxStateToProps)(Kitchen);

