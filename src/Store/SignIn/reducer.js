import {SIGNIN_CHANGE_LOGIN, SIGNIN_CHANGE_PASSWORD } from './actions';

const defaultState = { 
    login : '',
    password : '',
    status : '',
    payload : '',
    error : ''
};

export const signInReducer = ( state = defaultState, action ) => {
    switch(action.type){
        case SIGNIN_CHANGE_LOGIN : 
            return { ...state, login : action.payload }
        case SIGNIN_CHANGE_PASSWORD : 
            return {...state, password : action.payload}
        default : return state
    }
}