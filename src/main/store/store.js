import { combineReducers, createStore, applyMiddleware } from 'redux'

import rootReducers from './reducers'

const middleware = []

const store = createStore(
  combineReducers(rootReducers),
  {},
  applyMiddleware(...middleware)
)

export default store
