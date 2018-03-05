import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { render } from 'react-dom';


//components
import Login from './src/components/LoginScreen/component/Login.jsx';
import View from './src/view/view';


//react and redux related library
import { Provider } from 'react-redux';
import store, { history } from './src/store/index';

//redux router related libaray 
// import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter as Router } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
<<<<<<< HEAD
            <div className="container-fluid">
                <Route exact path = '/' component={Login}/>
                <Route path = '/home' component={View}/>
=======
            <div>
                <Route exact path='/' component={Login} />
                <Route path='/home' component={View} />
>>>>>>> 5f129db8a17d3e9d50119f48d65d4e9e93520c3e
            </div>
        );
    }
}

let rootElement = document.getElementById('app')

render(
    <Provider store={store}>
        <Router history={history}>
            <Main />
        </Router>
    </Provider>
    ,
    rootElement
)