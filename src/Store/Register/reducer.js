import {REGISTER_CHANGE_USERNAME, REGISTER_CHANGE_PASSWORD,
        REGISTER_CHANGE_LOGIN, REGISTER_CHANGE_AGE,
        REGISTER_CHANGE_PHONENUMBER, SET_STATUS, SEND_REGISTER} from './actions.js'


const defaultState = { 
    username : '',
    password : '',
    login : '',
    age : '',
    phonenumber :'',
    status : null,
    payload : null,
    error : null
}

export const registerReducer = ( state = defaultState, action ) => {
    switch (action.type){
        case REGISTER_CHANGE_USERNAME : 
            return { ...state, username : action.payload }
        case REGISTER_CHANGE_PASSWORD : 
            return { ...state, password : action.payload }
        case REGISTER_CHANGE_LOGIN : 
            return { ...state, login : action.payload }
        case REGISTER_CHANGE_AGE : 
            return { ...state, age : action.payload }
        case  REGISTER_CHANGE_PHONENUMBER : 
            return { ...state, phonenumber : action.payload }
        case SET_STATUS : 
            return { ...state,  status : action.status, payload : action.payload, error : action.error }
    
        case SEND_REGISTER : 
            return {...state, status : action.status, payload : action.payload, error :action.error}
        default : return state;
    }
};