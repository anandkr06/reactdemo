import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route,Switch,Redirect } from 'react-router-dom';


//containers
import TableView from './component/table-view/TableView';

 class User extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <TableView />
        )
    }
 }


//  () => (<div>Hi there !,it's User view...</div>);
 export default connect()(User);