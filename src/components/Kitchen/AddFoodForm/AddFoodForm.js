import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import { triggerLogout } from '../../../redux/actions/loginActions';
import { Link } from 'react-router-dom';
import '../Kitchen.css'

class AddFoodForm extends Component {

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

    alert = () => {
        alert('Food Added!')
    }


    render() {
        return (
        <div className="kitchenDiv">
            <button className="logout" onClick={this.logout}>Log Out</button>
            <h1>Add Food Form</h1>
            <button onClick={this.alert}>Add</button>
            <br/>
            <button><Link to="/kitchen">Back to Kitchen</Link></button>
            <button><Link to="/itemselect">Find Recipe</Link></button>
            
        </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
  });

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AddFoodForm);