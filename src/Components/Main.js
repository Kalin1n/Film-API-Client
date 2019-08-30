import React, { Component } from 'react';
// SPA
import { Router, Route, Switch, Redirect } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import { getFilms } from '../Store/Films/actions'
import thunk from 'redux-thunk'
import rootReducer from '../Store/reducer';
import createHistory from 'history/createBrowserHistory'
import Homepage from './homepage/homepage'
import FilmsPageContainer from './allFilmsPage/filmsPageContainer.js'
import Authentification from './authentification/authPage'
import FilmContainer from './oneFilmPage/filmContainer'

export const store  = createStore ( rootReducer, composeWithDevTools( applyMiddleware(thunk)));
store.subscribe( () => console.log( store.getState()))

class Main extends Component {
    render(){
        //getFilms();
        return(
            <Provider store={store}>
                <Router history={createHistory()}>
                    <Switch>
                        <Redirect from='/main' to='/'/>
                        <Route path='/'  component={Homepage} exact />
                        <Route path='/films' component={FilmsPageContainer} exact />
                        <Route path='/auth' component={Authentification} exact />
                        <Route path='/films/:film_id' component={FilmContainer} exact/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default Main;
