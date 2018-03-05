<<<<<<< HEAD
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import integratedReducer from '../reducers/reducers'

export const history = createHistory();

const initialState = {}
const enhancers = []
const middleware = [
    thunk
]

if (process.env.NODE_ENV ) {
    if (process.env.NODE_ENV === 'development'){
        const devToolsExtension = window.devToolsExtension;

        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension())
        }
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    integratedReducer,
    initialState,
    composedEnhancers
)

=======
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import integratedReducer from '../reducers/reducers';
import rootReducer from '../reducers/reducers';

export const history = createHistory();

const initialState = {}
const enhancers = []
const middleware = [
    thunk
    // ,
    // routerMiddleware(history)
]

if (process.env.NODE_ENV ) {
    if (process.env.NODE_ENV === 'development'){
        const devToolsExtension = window.devToolsExtension;

        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension())
        }
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
)

>>>>>>> 5f129db8a17d3e9d50119f48d65d4e9e93520c3e
export default store;