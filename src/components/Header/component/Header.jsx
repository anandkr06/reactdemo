import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
import { combineReducers } from 'redux'
import { reset, submit } from 'redux-form';
import { editUserFormAction } from '../../User/action/UserAction';

class Header extends Component {

    constructor(props) {
        super(props);
        this.resetForm = this.resetForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.routeBackToDashboard = this.routeBackToDashboard.bind(this);
    }

    resetForm(event) {
        event ? event.preventDefault() : '';
        if (this.props.userForm && typeof this.props.userForm.initial.userId === "undefined") {
            this.props.reset(this.props.currentView);
        }
        else {
            this.props.editUserFormAction([]);
        }
    }

    submitForm(event) {
        event.preventDefault();
        this.props.submit(this.props.currentView);
    }

    routeBackToDashboard(e){
        e.preventDefault();
        this.resetForm();
        this.props.history.push('/home');
    }

    render() {
        return (
            <div className="col-md-12">
                <button onClick={this.routeBackToDashboard}><img />Back</button>
                <button onClick={this.resetForm}>Reset</button>
                <button onClick={this.submitForm}>Save {this.props.title}</button>
            </div>
        )
    }

}


function mapStateToProps(state) {
    return {
        userForm: state.form.userForm,
        roleForm: state.form.roleForm,
        currentView: state.activeViewInfo.activeViewObject
    };
};


export default connect(mapStateToProps, { reset, submit, editUserFormAction })(Header);
