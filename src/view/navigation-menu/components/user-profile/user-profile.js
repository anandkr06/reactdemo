import React, { Component } from 'react';
import { connect } from 'react-redux';

const UserProfile = props => {
    return (
       <div>
           <label>UserProfile Pic</label>
           <label>{props.userLoginId}</label>
           <label>Welcome {props.userLoginName} </label>
        </div>
    )
}

const mapStateToProps = state => ({
    userLoginId : state.userLoginInfo.loginUser.email,
    userLoginName : state.userLoginInfo.loginUser.name
});

export default connect(mapStateToProps)(UserProfile);