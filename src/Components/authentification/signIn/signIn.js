import React, { Component } from 'react'

class SignIn extends Component {
    constructor(props){
        super(props);
        this.loginChange=this.loginChange.bind(this);
        this.passwordChange=this.passwordChange.bind(this);
        this.sendSignIn=this.sendSignIn.bind(this);
    }
    loginChange(event){
        this.props.setLoginText(event.target.value);
    }
    passwordChange(event){
        this.props.setPasswordText(event.target.value);
    }
    sendSignIn(event){
        event.preventDefault()
        var login = this.props.login;
        var  password = this.props.password;
        this.props.signIn(login, password);
    }
    render(){
        return(
            <>
                <h1>Sign in </h1> 
                <form>
                    <input type='text' placeholder='Input login' value={this.props.login} onChange={this.loginChange}/>
                    <input type='password' placeholder='Input password' value={this.props.password} onChange={this.passwordChange}/> 
                    <button onClick={this.sendSignIn}> Sign IN  </button>
                </form>
            </>
        )
    }
}

export default SignIn;