import { SET_FILMS_STATUS}  from './actions.js';

const defaultState = {
  films : [],
  status: null,
  error : null
}

export const filmsReducer = ( state = defaultState, action ) => {
  switch (action.type) {
    case SET_FILMS_STATUS:
      return { ...state, status : action.status, films : action.payload, error : action.error};
    default: return state;
  }
}
