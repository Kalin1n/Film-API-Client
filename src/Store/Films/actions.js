export const SET_FILMS_STATUS = 'SET_FILMS_STATUS';

export const filmsPending = () => ({
  type : SET_FILMS_STATUS,
  status : 'PENDING',
  payload : null,
  error : null
});

export const filmsResolved = ( payload ) => ({
  type : SET_FILMS_STATUS,
  status : 'RESOLVED',
  payload,
  error : null
});

export const filmsRejected = ( error ) => ({
  type : SET_FILMS_STATUS,
  status : 'REJECTED',
  payload : null,
  error
});

export function getFilms (){
  return async dispatch => {
    dispatch ( filmsPending())
    var films = await ( await fetch('https://film-api-go.herokuapp.com/api/v1/film',{
      headers : {
          'Content-Type' : 'application/json',
          'Accept' : 'application/json'
       },
       method : 'GET'
     })).json()
   console.log('F',films)
   if (!!films){
     dispatch ( filmsResolved(films.result))
   }
   else {
     dispatch ( filmsRejected(films))
   }
 }
}
