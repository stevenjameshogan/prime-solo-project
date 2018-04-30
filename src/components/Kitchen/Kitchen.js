import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import { Link } from 'react-router-dom';
import './Kitchen.css'


class Kitchen extends Component {
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

  render() {

    return (
      <div className="kitchenDiv">
        <button className="logout" onClick={this.logout}>Log Out</button>
        <h1>Welcome to your Kitchen, { this.props.user.userName }!</h1>
        <button><Link to="/addfood">Add Food</Link></button>
        <button><Link to="/itemselect">Find Recipe</Link></button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    user: state.user,
  });

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Kitchen);

