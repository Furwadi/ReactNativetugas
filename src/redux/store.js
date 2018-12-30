import { createStore, applyMiddleware } from 'redux'
import productsReducer from './reducers'
// import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'

export default createStore(
    productsReducer,
    applyMiddleware(
        // logger,
        promiseMiddleware()
    )
)