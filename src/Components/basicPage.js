import React from 'react';
import {Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';
const { Header, Content, Footer } = Layout;


let BasicLayout = props=>  
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"          
                        style={{ lineHeight: '64px' }}
                    >
                    <Menu.Item key="1"> <Link to='/main'> Home </Link></Menu.Item>
                    <Menu.Item key="2"> <Link to='/auth'> Sign in / Log in </Link> </Menu.Item>
                    <Menu.Item key="3"> <Link to='/films'> All films </Link></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>

export default BasicLayout;