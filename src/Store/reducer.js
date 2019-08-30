import { combineReducers } from 'redux';
import { registerReducer } from './Register/reducer';
import { signInReducer } from './SignIn/reducer';
import { filmsReducer } from './Films/reducer';
import { rentReducer } from './Rented/reducer'
export default combineReducers({
    register : registerReducer,
    signIn : signInReducer,
    filmsRes : filmsReducer,
    rent : rentReducer
});