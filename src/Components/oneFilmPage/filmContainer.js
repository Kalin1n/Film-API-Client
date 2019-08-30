import React, { Component } from 'react';
import { connect } from 'react-redux';
import BasicLayout from '../basicPage'
import Film from './film';
import { getFilms } from '../../Store/Films/actions' ;


class FilmContainer extends Component{
    render(){
        return(
            <BasicLayout>
                <Film
                    user={this.props.user}
                    films={this.props.films}
                    getFilms={this.props.getFilms}
                />
            </BasicLayout>
        )
    }
}

const mapStateToProps = ( state ) => {
    console.log('State check ', state.filmsRes.films)
    return {
        user : state.signIn.payload,
        films : state.filmsRes.films
    }
}

const mapDispatchToProps = {
    getFilms
};
export default connect(mapStateToProps, mapDispatchToProps) (FilmContainer);