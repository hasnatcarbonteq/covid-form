import React from 'react'
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;

import CustomFooter from '../CustomFooter/CustomFooter.jsx';
import CustomSidebar from '../CustomSidebar/CustomSidebar.jsx';

function MainLayout(props) {

    const { children, title } = props;

    return (
        <Layout>
            <Sider><CustomSidebar {...props}/></Sider>
            <Layout>
                <Header style={{color: '#fff'}}>{title}</Header>
                <Content style={{background: '#fff'}}>
                    {children}
                </Content>
                <CustomFooter/>
            </Layout>
            
        </Layout>
    )
}

export default MainLayout
