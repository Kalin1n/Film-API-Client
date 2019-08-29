import { combineReducers } from 'redux';
import { registerReducer } from './Register/reducer';
import { signInReducer } from './SignIn/reducer';
export default combineReducers({
    register : registerReducer,
    signIn : signInReducer
});