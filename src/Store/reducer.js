import { combineReducers } from 'redux';
import { registerReducer } from './Register/reducer'
export default combineReducers({
    register : registerReducer
});