import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import helping components
import Loader from '../utilities/loader/Loader';
import Header from '../view/header/components/Header';
import Navigation from './navigation-menu/Navigation';
import Screen from './screen/Screen';

//import for routings
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Dashboard from './screen/Dashboard/Dashboard';
// import PreviledgeMenu from '../components/PreviledgeMenu/component/PreviledgeMenu.jsx'


//import actions
import { setHeader } from './header/action/header-action';

class View extends React.Component {
    constructor(props){
        super(props);
        props.setHeaderTitle('Dashboard');
    }

    render(){
        return (
            <div className="container-fluid"><div className="row">
                <div className="col-sm-3 col-md-2 sidebar" >
                    <Navigation url = {this.props.match.url}/>    
                </div>
                <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" > 
                     <Header/>
                     <Screen url = {this.props.match.url}/> 
                </div>
              <Loader></Loader>
            </div>
            </div>
          )
    }
}

const mapStateToProps = state => {
    debugger;
    return {
      userProfile : state.userLoginInfo.loginUser,
      navigationMenu : state.userLoginInfo.navigationMenu
     }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    setHeaderTitle : setHeader
  }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(View)