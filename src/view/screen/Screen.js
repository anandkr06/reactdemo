import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './Screen.css';
import Navigation from '../../components/Menu/component/Menu.jsx';
import ViewUser from '../../components/User/component/ViewUser.jsx';


class Screen extends Component {

  render() {
    return (
        <div>
          <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <Switch>
                    <Route path={`${this.props.url}/system/:topicId`} component={Navigation}/>
                    <Route path={`${this.props.url}`} component={ViewUser}/>
                </Switch>
            </div>
        </div>
    );
  }
}

export default withRouter(Screen);