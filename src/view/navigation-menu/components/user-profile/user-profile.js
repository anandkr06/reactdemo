import React, { Component } from 'react';
import { connect } from 'react-redux';

const UserProfile = props => {
    return (
       <div>
           <text>UserProfile Pic</text>
           <text>{props.userLoginId}</text>
           <text>Welcome {props.userLoginName} </text>
        </div>
    )
}

const mapStateToProps = state => ({
    userLoginId : state.userLoginInfo.loginUser.email,
    userLoginName : state.userLoginInfo.loginUser.name
});

export default connect(mapStateToProps)(UserProfile);