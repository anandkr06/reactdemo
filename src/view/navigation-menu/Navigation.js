import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './navigation.css';

//import containers
import UserProfile from './components/user-profile/user-profile';
import Menu from './components/menu/menu';

class Navigation extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <UserProfile />
                <Menu url={this.props.url}/>
            </div>
        )
    }
}



export default connect()(Navigation);
