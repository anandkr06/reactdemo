import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import { combineReducers } from 'redux'
import { reset, submit } from 'redux-form';

class Header extends Component{

    constructor(props){
        super(props);
        this.resetForm = this.resetForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    resetForm(event){
        event.preventDefault();
        this.props.reset("userForm");
    }

    submitForm(event){
        event.preventDefault();
        this.props.submit("userForm");
    }

    render(){
        return (
            <div className="col-md-12">
                <span><img/>Back</span>
                <button onClick = {this.resetForm}>Reset</button>
                <button onClick = {this.submitForm}>Save {this.props.title}</button>
            </div>
        )
    }

}

function mapStateToProps(state) {
        return {
            userForm: state.form.userForm,
        };
    };


export default connect(mapStateToProps, {reset, submit})(Header);
