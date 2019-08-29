import React, { Component } from 'react';
import BasicLayout from '../basicPage'
import SignInContainer from './signIn/signInContainer'
import RegisterContainer from './register/registerContainer'
import { Tabs } from 'antd'
const {TabPane} = Tabs;

class Authentification extends Component {
    render(){
        return(
            <BasicLayout> 
                <h1>Sign in / Register </h1>
                <Tabs defaultActiveKey='1'>
                    <TabPane tab='Sign in' key='1'>  
                        <SignInContainer/>
                    </TabPane>   
                    <TabPane tab='Register' key='2'>  
                        <RegisterContainer/>
                    </TabPane>   
                </Tabs> 
               
            </BasicLayout>
        )
    }
}

export default Authentification;