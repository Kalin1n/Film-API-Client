export const RENTED_RENT_FILM = 'RENTED_RENT_FILM';
export const RENTED_UNRENT_FILM = 'RENTED_UNRENT_FILM';
export const SET_STATUS = 'SET_STATUS';

export const rentPending = () => ({
    type : SET_STATUS,
    status : 'PENDING',
    payload : null,
    error : null
});

export const rentResolved = (paylaod) => ({
    type : SET_STATUS,
    status : 'RESOLVED',
    paylaod,
    error : null
});

export const rentRejecte = ( error ) => ({
    type :SET_STATUS,
    status : ' REJECTED',
    paylaod : null,
    error
});

export function rent (id, token){
    return async dispatch => {
        console.log('check vars', id, token )
        dispatch (rentPending( ))
        var response = await ( await fetch('https://film-api-go.herokuapp.com/api/v1/rent',{
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : 'Bearer '+ token
             },
             method : 'POST',
             body : JSON.stringify({
                 "Film_id": id
             })
        })).json();
        console.log(response)
    }
}