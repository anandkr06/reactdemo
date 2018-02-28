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

export default store;