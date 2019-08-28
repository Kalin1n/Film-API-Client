import React, { Component } from 'react';
import BasicLayout from '../basicPage'
import SignIn from './signIn/signIn'
import Register from './register/register'
import { Tabs } from 'antd'
const {TabPane} = Tabs;

class Authentification extends Component {
    render(){
        return(
            <BasicLayout> 
                <h1>Sign in / Register </h1>
                <Tabs defaultActiveKey='1'>
                    <TabPane tab='Sign in' key='1'>  
                        <SignIn/>
                    </TabPane>   
                    <TabPane tab='Register' key='2'>  
                        <Register/>
                    </TabPane>   
                </Tabs> 
               
            </BasicLayout>
        )
    }
}

export default Authentification;