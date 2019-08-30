import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class FilmsPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            result : []
        }
    }
    componentDidMount(){
        this.props.getFilms().then(
            //console.log('r',this.props.result)
        )
            
    }
    render(){
        let root = window.location.pathname;
        return (
            <>
                <h1> All films </h1>
                <ul className="all-list">
                { this.props.result ?  
                    this.props.result.map ( 
                        (f)=>
                            <li key={f.id} className='film-list'>
                                <Link to={{
                                    pathname : `${root}/${f.id}`,
                                    state : { component : 'Film' }
                                }}>
                                    <div>
                                        <span> {f.id}</span>
                                        <h2>{f.name}</h2> 
                                        <span> {f.year}</span> 
                                        {console.log(f.genres)}
                                    </div>
                                </Link>
                            </li>
                         )
                    : <li>Empty</li> }
                 </ul>
            </>
        )
    }
}

export default FilmsPage;

/*
<span>
                                    {f.genres.map( (g ) => <span key={g.id}>{g.name}</span>) }    
                                </span> 
*/