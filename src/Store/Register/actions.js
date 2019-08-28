
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
        var data = await ( await fetch ('',{
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
        console.log(data)

        return {
            type: SET_STATUS,
            payload : data
        }
    }
}