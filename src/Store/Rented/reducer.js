import { SET_STATUS } from './actions';

const defaultState = { 
    status : null,
    payload : null,
    error : null
};

export const rentReducer = ( state = defaultState, action ) => {
    switch(action.type){
        case SET_STATUS : 
            return {...state, status : action.status, payload : action.payload, error : action.error} 
        default : return state;
    }
}