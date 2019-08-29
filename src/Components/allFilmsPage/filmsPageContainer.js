import React, {Component} from 'react';
import { connect } from 'react-redux';
import BasicLayout from '../basicPage';
import FilmsPage from './filmsPage';
import { getFilms } from '../../Store/Films/actions' 


class FilmsPageContainer extends Component{
  render(){
    return(
      <BasicLayout>
        <FilmsPage 
          result={this.props.result}
          getFilms={this.props.getFilms}
        />
      </BasicLayout>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    result : state.filmsRes.films
  }
}

const mapDispatchToProps = {
  getFilms
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsPageContainer);
