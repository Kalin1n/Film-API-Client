import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Film extends Component{
    constructor(props){
        super(props);
        this.state = {
            id : undefined
        }
        this.rent = this.rent.bind(this);
    }
    
     async componentDidMount(){            // REDO!
        let id = window.location.pathname;
        id = id.replace(/[^0-9\.]+/g, "");
        this.setState({id : id});
        id--;
       console.log('films', this.props.films)
        if ( this.props.films.length === 0  ){
          await ( this.props.getFilms())
          this.setState( {result : this.props.films[id] } ) ;
            var resGen;
            if (!!this.state.result.genres) {
                for (var  x of this.state.result.genres ){
                    this.setState({resGen :  this.state.resGen+`${x.name} `});
                }
            }
            else{
                this.setState(resGen = ' Not informed');
            } 
        }
     
        this.setState( {result : this.props.films[id] } ) ;
        resGen='';
        if (!!this.props.films[id].genres) {
            for ( x of this.props.films[id].genres ){
                this.setState({resGen :  `${x.name} `});
            }
        }
        else{
            this.setState(resGen = ' Not informed');
        } 
            
    }
    rent(){
        console.log('from a rent func',this.state.id);
        this.props.rent(this.state.id, this.props.user)
    }
    render(){
        
        return (
            <>
            { this.state.result ?
                <div> 
                    <h1> Your choice </h1> 
                    <h1> Title : {this.state.result.name}</h1> 
                    <h1> Year of production : {this.state.result.year} </h1> 
                    <h1> Genres : {this.state.resGen}</h1> 
                    {
                        this.props.user ? 
                            <button onClick={this.rent}> Click to rent </button> 
                            : <p>Log in first to rent a film</p> 
                    } 
                </div> 
            : <p>Wait</p> } 
            <Link to={{
                pathname : `/films`
                    }
                }> To films list </Link>
            </>
        )
    }
}

export default Film;