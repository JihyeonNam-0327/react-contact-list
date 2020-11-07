import { createStore, combineReducers, applyMiddleware } from 'redux'
import contactReducer from '../reducers/reducers.js'
import thunk from 'redux-thunk'
const reducer = combineReducers({
  contactReducer
})
const store = createStore(
 reducer,
 applyMiddleware(thunk)
)
export default store;