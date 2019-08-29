import {SIGNIN_CHANGE_LOGIN, SIGNIN_CHANGE_PASSWORD, 
        SIGNIN_SET_STATUS, SEND_SIGNIN } from './actions';
const defaultState = { 
    login : '',
    password : '',
    status : null,
    payload : null,
    error : null
};

export const signInReducer = ( state = defaultState, action ) => {
    switch(action.type){
        case SIGNIN_CHANGE_LOGIN : 
            return { ...state, login : action.payload }
        case SIGNIN_CHANGE_PASSWORD : 
            return {...state, password : action.payload}
        case SIGNIN_SET_STATUS : 
            return { ...state, status : action.status, payload : action.payload, error : action.error }
        case SEND_SIGNIN : 
            return { ...state, status : action.status, payload : action.payload, error : action.error  }
        default : return state
    }
}