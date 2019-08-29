
export const REGISTER_CHANGE_USERNAME = 'REGISTER_CHANGE_USERNAME';
export const REGISTER_CHANGE_PASSWORD = 'REGISTER_CHANGE_PASSWORD';
export const REGISTER_CHANGE_LOGIN = 'REGISTER_CHANGE_LOGIN';
export const REGISTER_CHANGE_AGE = 'REGISTER_CHANGE_AGE';
export const REGISTER_CHANGE_PHONENUMBER = 'REGISTER_CHANGE_PHONENUMBER';
export const SET_STATUS = 'SET_STATUS';
export const SEND_REGISTER = 'SEND_REGISTER';

export const setUsernameText = ( username ) => ({
    type : REGISTER_CHANGE_USERNAME,
    payload : username
});

export const setPasswordText = ( password ) => ({
    type : REGISTER_CHANGE_PASSWORD,
    payload : password
});

export const setLoginText = ( login ) => ({
    type : REGISTER_CHANGE_LOGIN,
    payload : login
});

export const setAgeText = ( age ) => ({
    type : REGISTER_CHANGE_AGE,
    payload : age
});

export const setPhonenumberText = ( phonenumber ) => ({
    type :  REGISTER_CHANGE_PHONENUMBER,
    payload : phonenumber
});

export const actionPending = () => ({
    type : SET_STATUS,
    status : 'PENDING',
    payload : null,
    error : null
})

export const actionResolved = ( payload ) => ({
    type : SET_STATUS,
    status : 'RESOLVED',
    payload,
    error : null
})

export const actionRejected = ( error ) => ({
    type : SET_STATUS,
    status : 'REJECTED',
    payload : null,
    error
})

export function register ( username, password, login, age, phonenumber ){
    return async dispatch => {
        dispatch ( actionPending())
        //console.log('R', username, password, login, age, phonenumber);
        var data = await ( await fetch ('https://film-api-go.herokuapp.com/auth',{
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
             },
             method : 'POST',
             body : JSON.stringify( {
                 "Username" : username,
                 "Password" : password,
                 "Login" : login,
                 "Age" : age,
                 "Telephone" : phonenumber
             })
        })).json()
        //console.log('d',data);
        if (!!data.error){
            console.log('Vot etot error', data.error);
            dispatch(actionRejected(data.error));
        }
        else {
            console.log('Vot takaya data', data);
            dispatch(actionResolved(data));
        }
    }
}
