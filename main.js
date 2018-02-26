import React, {Component} from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//import store, { history } from './src/store/index';
import PreviledgeMenu from './src/components/PreviledgeMenu/component/PreviledgeMenu.jsx'
import integratedReducer from './src/reducers/reducers'

class Main extends Component {
    render() {
        return (
            <div>
                <Route path = '/' component={PreviledgeMenu}/>
            </div>
        );
    }
}

let store = createStore(integratedReducer)
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