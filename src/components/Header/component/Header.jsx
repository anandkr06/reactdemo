import React, {Component} from 'react';
import {connect} from 'react-redux';
import { reset } from 'redux-form';

class Header extends Component{

    constructor(props){
        super(props);
        this.resetForm = this.resetForm.bind(this);
    }

    resetForm(event){
        event.preventDefault();
        this.props.reset("userForm");
    }

    render(){
        return (
            <div>
                <span><img/>Back</span>
                <button onClick = {this.resetForm}>Reset</button>
                <button onClick = {() => dispatch(submit('remoteSubmit'))}>Save {this.props.title}</button>
            </div>
        )
    }

}

function mapStateToProps(state) {
        return {
            userForm: state.form.userForm,
        };
    };

export default connect(mapStateToProps, {reset})(Header);
