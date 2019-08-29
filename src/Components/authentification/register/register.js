import React, { Component } from 'react';

class Register extends Component {
    constructor(props){
        super(props);
        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.loginChange = this.loginChange.bind(this);
        this.ageChange = this.ageChange.bind(this);
        this.phonenumberChange = this.phonenumberChange.bind(this);
        this.sendRegister = this.sendRegister.bind(this);
    }
    usernameChange( event ){
        this.props.setUsernameText(event.target.value)
    }
    passwordChange( event ){
        this.props.setPasswordText(event.target.value)
    }
    loginChange( event ){
        this.props.setLoginText(event.target.value)
    }
    ageChange( event ){
        this.props.setAgeText(event.target.value)
    }
    phonenumberChange( event ){
        this.props.setPhonenumberText(event.target.value)
    } 
    sendRegister( event ){
        event.preventDefault()
        var username = this.props.username;
        var password = this.props.password;
        var login = this.props.login;
        var age = Number (this.props.age);
        var phonenumber = this.props.phonenumber
        this.props.register(username, password, login, age, phonenumber);
    }
    render(){
        return(
            <>
                <h1> Register </h1> 
                <div> 
                    <form>
                        <input type='text' placeholder='Input username' 
                            value={this.props.username} onChange={this.usernameChange}/> 
                        <input type='password' placeholder='Input password' 
                            value={this.props.password} onChange={this.passwordChange}/> 
                        <input type='text' placeholder='Input login' 
                            value={this.props.login} onChange={this.loginChange}/> 
                        <input type='number' placeholder='Input age' 
                            value={this.props.age} onChange={this.ageChange}/> 
                        <input type='number' placeholder='Input phonenumber' 
                            value={this.props.phonenumber} onChange={this.phonenumberChange}/> 
                        <button onClick={this.sendRegister}> Register </button>
                    </form>
                </div> 
            </>
        )
    }
}

export default Register;