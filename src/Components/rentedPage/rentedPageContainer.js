import React, { Component } from 'react';
import BasicLayout from '../basicPage'
import Rented from './rented'

class RentedPageContainer extends Component{
    render(){
        return (
            <>
                <BasicLayout> 
                    <Rented />
                </BasicLayout>
            </>
        )
    }
}

export default RentedPageContainer;