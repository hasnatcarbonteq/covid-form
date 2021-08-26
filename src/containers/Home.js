import React from 'react'
import { Layout } from 'antd';

import Navbar from '../components/Navbar/Navbar.jsx'
import CovidForm from '../components/CovidForm/CovidForm.jsx';

const { Header, Content } = Layout;

function Home() {
    return (
        <Layout>
            <Header>
                <Navbar />
            </Header>
            <Content>
                <CovidForm />
            </Content>
        </Layout>
    )
}

export default Home
