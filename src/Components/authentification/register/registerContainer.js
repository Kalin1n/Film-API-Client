import React, { Component } from 'react' ;
import {connect} from 'react-redux';
import Register from './register';
import {setUsernameText, setPasswordText, 
        setLoginText, setAgeText, 
            setPhonenumberText} from '../../../Store/Register/actions';

class RegisterContainer extends Component{
    render(){
        return(
            <Register
                username={this.props.username}
                password={this.props.password}
                login={this.props.login}
                age={this.props.age}
                phonenumber={this.props.phonenumber}
                setUsernameText={this.props.setUsernameText}
                setPasswordText={this.props.setPasswordText}
                setLoginText={this.props.setLoginText}
                setAgeText={this.props.setAgeText}
                setPhonenumberText={this.props.setPhonenumberText}
            />
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        username : state.register.username,
        password : state.register.password,
        login : state.register.login,
        age : state.register.age,
        phonenumber : state.register.phonenumber
    }
}

const mapDispatchToProps = {
    setUsernameText,
    setPasswordText,
    setLoginText,
    setAgeText,
    setPhonenumberText
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);