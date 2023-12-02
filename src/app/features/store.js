import {combineReducers, createStore, compose } from 'redux';
import counterReducer from './Counters/reducer';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';


let rootReducer = combineReducers({
    counter : counterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOL_EXTENTION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store