import name from './UsernameReducer';
import token from './TokenReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    name,
    token
});