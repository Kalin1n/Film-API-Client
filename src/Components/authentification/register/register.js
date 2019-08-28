import React, { Component } from 'react'

class Register extends Component {
    render(){
        return(
            <>
                <h1> Register </h1> 
                <div> 
                    <form>
                        <input type='text' placeholder='Input nickname'> </input>
                    </form>
                </div> 
            </>
        )
    }
}

export default Register;