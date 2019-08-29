import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setLoginText, setPasswordText} from '../../../Store/SignIn/actions'
import SignIn from './signIn';


class SignInContainer extends Component{
    render(){
        return(
            <SignIn 
                login={this.props.login}
                setLoginText={this.props.setLoginText}
                password={this.props.password}
                setPasswordText={this.props.setPasswordText}
            />
        )
    }
}

const mapStateToProps = ( state ) => {
    return { 
        login : state.signIn.login,
        password : state.signIn.password
    };
};

const mapDispatchToProps = {
    setLoginText, setPasswordText
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);