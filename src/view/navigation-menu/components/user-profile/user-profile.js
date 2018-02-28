import React, { Component } from 'react';
import { connect } from 'react-redux';

const UserProfile = props => {
    return (
       <div>
           <text>UserProfile Pic</text>
           <text>{props.userLoginId}</text>
        </div>
    )
}

const mapStateToProps = state => ({
    userLoginId : state.userLoginInfo.loginUser.email
});

export default connect(mapStateToProps)(UserProfile);