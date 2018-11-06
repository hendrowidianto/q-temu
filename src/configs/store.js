import {createStore, combineReducers } from 'redux'
import appReducer from '../reducers/app'

const reducers = combineReducers({
    app: appReducer
})

export default createStore (
    reducers
)