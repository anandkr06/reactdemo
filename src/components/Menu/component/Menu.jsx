import React from 'react';
import render from 'react-dom';
import '../styles/Menu.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../Header/component/Header.jsx'
import {withRouter, Switch, Route, Link } from 'react-router-dom';
import UserForm from '../../User/component/UserForm.jsx'
import UserRole from '../../User/component/UserRole.jsx'

class Navigation extends React.Component {

    renderList() {
        return this.props.options.map(
            (option) => {
                return (
                    option.isHeading ?
                    <li key = {option.heading}>{option.title}</li>
                    :
                    <li key={option.title}><Link to = {option.title.split(" ").join("")}>{option.title}</Link>
                    </li>
                );
            }
        );
    }

    render() {

        return (
            <div>
                <Header title = "User"/>
                <ul>
                    {this.renderList()}
                </ul>
                <Route path='/system/UserInfo' component={UserForm}/>
                <Route path='/system/UserRole' component={UserRole}/>
            </div>
        );
    }
    }

function mapStateToProps(state) {
  return {
      options: state.options
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ setOptionClicked: Events.CREATE_USER_NAVIGATION_MENU }, dispatch);
// }

export default connect(mapStateToProps)(Navigation);