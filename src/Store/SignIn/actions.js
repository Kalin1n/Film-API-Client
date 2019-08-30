export const SIGNIN_CHANGE_LOGIN = 'SIGNIN_CHANGE_LOGIN';
export const SIGNIN_CHANGE_PASSWORD = 'SIGNIN_CHANGE_PASSWORD';
export const SIGNIN_SET_STATUS = 'SIGNIN_SET_STATUS';
export const SEND_SIGNIN = 'SEND_SIGNIN';

export const setLoginText = ( login ) => ({
    type : SIGNIN_CHANGE_LOGIN,
    payload : login
});

export const setPasswordText = ( password ) => ({
    type : SIGNIN_CHANGE_PASSWORD,
    payload : password
});

export const actionPending = () => ({
    type : SIGNIN_SET_STATUS,
    status : 'PENDING',
    payload : null,
    error : null
});

export const actionResolved = ( payload ) => ({
    type : SIGNIN_SET_STATUS,
    status : 'RESOLVED',
    payload,
    error : null
});

export const actionRejected = ( error ) => ({
    type : SIGNIN_SET_STATUS,
    status : 'REJECTED',
    payload : null,
    error
});

export function signIn ( login, password ){
    return async dispatch => {
        dispatch ( actionPending( ))
        console.log('Sign otrabativaet s : ', login, password)
        var data = await ( await fetch ('https://film-api-go.herokuapp.com/login',{
            headers : { 
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
             },
             method : 'POST',
             body : JSON.stringify( {
                "Login" : login,
                "Password" : password
             }) 
        })).json()


        console.log('iz sign in', data.token)
        if (!!data.token){
            console.log("Vot takay data")
            dispatch(actionResolved(data.token))
        }
        else {
            dispatch(actionRejected(data.error))
        }   
    }
}
