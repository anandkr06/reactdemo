import React, { Component } from 'react';
import { connect } from 'react-redux';
import './user-profile.css'

const UserProfile = props => {
    return (
       <div id="user-profile" class="py-4">
       <div class="logo text-center pb-4"><img src={"../../../../src/images/dashboard-logo.png"} alt="logo" /></div>
           <div class="user">UserProfile Pic</div>
           <span class="name">{props.userLoginName}</span>
           <span class="mailid">{props.userLoginId}</span>
        </div>
    )
}

const mapStateToProps = state => ({
    userLoginId : state.userLoginInfo.loginUser.email,
    userLoginName : state.userLoginInfo.loginUser.name
});

export default connect(mapStateToProps)(UserProfile);