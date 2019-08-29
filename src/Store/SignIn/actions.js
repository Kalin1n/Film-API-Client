export const SIGNIN_CHANGE_LOGIN = 'SIGNIN_CHANGE_LOGIN';
export const SIGNIN_CHANGE_PASSWORD = 'SIGNIN_CHANGE_PASSWORD';

export const setLoginText = ( login ) => ({
    type : SIGNIN_CHANGE_LOGIN,
    payload : login
});

export const setPasswordText = ( password ) => ({
    type : SIGNIN_CHANGE_PASSWORD,
    payload : password
})