import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import { Link } from 'react-router-dom';
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails,} from 'material-ui/ExpansionPanel';
import Dialog, { DialogContent, DialogTitle} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Fridge from './Fridge/Fridge';
import Freezer from './Freezer/Freezer';
import Pantry from './Pantry/Pantry';
import moment from 'moment';
import { Home, AccountBox, Kitchen, Search, Warning, ExpandMore } from 'material-ui-icons';
import './Kitchen.css';

// This component is a virtual representation of a given user's Kitchen and all food items currently held by the user.
// This page is primarily a container for our Freezer, Fridge, and Pantry subcomponents

class KitchenHome extends Component {
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
      this.props.dispatch({
        type: 'EXP_WARNING'
      })
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

  // 
  clearSearch = () => {
    this.props.dispatch({
        type: 'CLEAR_SEARCH_PARAMS'
    })
  }

  render() {
    // Map over array of expiring food items (held in expDateReducer) and create a visual JSX display for each item
    let expiringItems = this.props.reduxState.expDateReducer.map((item) => {
    return(
      <div key={item.id} className="expiringFood">
        <p>{item.name}</p>
        <img className="tinyItemImg" src={require(`./images/${item.image_url}`)} alt="food"/>
      </div>
    )
    })
    // If the user has any food items expiring soon, render a pop-up dialog modal to alert them, along with quick link option
    // To the Recipe Search portion of the App
    if (this.props.reduxState.expDateReducer.length && this.props.reduxState.expTrackerReducer === false) {
      return (
        <div className="kitchenDiv">
          <div className="kitchenNavDiv">
            <Link to="/kitchen"><Kitchen style={{fontSize: 40}} onClick={this.clearSearch}/></Link>
            <AccountBox className="logout" style={{fontSize: 40}} onClick={this.logout}/>
          </div>
          <Dialog open={this.state.open} onClose={this.handleClose}>
            <DialogTitle id="title"><Warning style={{fontSize: 40}}/><br/>{this.props.user.userName}, you have expiring food!</DialogTitle>
            <DialogContent className="expiringDiv">
                {expiringItems}
                <div className="expiringButtons">
                  <Button variant="raised" onClick={this.handleClose}>Got it</Button>
                  <Link to="/itemselect"><Button variant="raised" color="primary" onClick={this.handleClose}>Find Recipes!<Search /></Button></Link>
                </div>
            </DialogContent>
          </Dialog>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div id="bottomDiv">
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
        </div>
      );
    } 
    // Otherwise, if the user doesn't have expiring food, render the Kitchen page as normal
    else {
      return (
        <div className="kitchenDiv">
          <div className="kitchenNavDiv">
            <Link to="/kitchen"><Kitchen style={{fontSize: 40}}onClick={this.clearSearch}/></Link>
            {/* <span className="kitchenHeader">{this.props.user.userName}'s Kitchen</span> */}
            <AccountBox className="logout" style={{fontSize: 40}} onClick={this.logout}/>
          </div>
          {/* Categorize food items based on stored location. On click, each panel will open to reveal the
           given user's food items stored in that location */}
          <div>
            {/* Freezer Panel */}
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Typography>Freezer</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* Contents of the panel are nested in the Freezer subcomponent, where the food item data lies */}
                    <Freezer />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            {/* Fridge Panel */}
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Typography>Fridge</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* Contents of the panel are nested in the Fridge subcomponent, where the food item data lies */}
                    <Fridge />
                </ExpansionPanelDetails>
            </ExpansionPanel >
            {/* Pantry Panel */}
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Typography>Pantry</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* Contents of the panel are nested in the Pantry subcomponent, where the food item data lies */}
                    <Pantry />
                </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          <div id="bottomDiv">
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          {/* Navigational links to Add Foot items to this Kitchen or Find recipes based on items in Kitchen */}
          <div className="buttonDiv">
            <Link to="/addfood"><Button variant="raised" color="primary" style={{fontSize: 17}}
              className="bottomBtn">Add Food<Kitchen /></Button></Link>
            <Link to="/itemselect"><Button variant="raised" color="primary" style={{fontSize: 17}} 
            className="bottomBtn">Find Recipes<Search /></Button></Link>
          </div>
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
export default connect(mapReduxStateToProps)(KitchenHome);

