import React, {Component} from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store, { history } from './src/store/index';
import PreviledgeMenu from './src/components/PreviledgeMenu/component/PreviledgeMenu.jsx'
import Login from './src/components/LoginScreen/component/Login.jsx'
import integratedReducer from './src/reducers/reducers'
import View from './src/view/view'

class Main extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Route exact path = '/' component={Login}/>
                <Route path = '/home' component={View}/>
            </div>
        );
    }
}

//let store = createStore(integratedReducer)
let rootElement = document.getElementById('app')

render(
    <Provider store = {store}>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </Provider>
  ,	
   rootElement
)