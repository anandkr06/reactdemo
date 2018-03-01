import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './Screen.css';
import Navigation from '../../components/Menu/component/Menu.jsx';
import User from './User/User';


class Screen extends Component {

  render() {
    return (
          <div className="col p-0">
                <Switch>
                    <Route path={`${this.props.url}/system/:topicId`} component={Navigation}/>
                    <Route path={`${this.props.url}`} component={User}/>
                </Switch>
            </div>
    );
  }
}

export default withRouter(Screen);