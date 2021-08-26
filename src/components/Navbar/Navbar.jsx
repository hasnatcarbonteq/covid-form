import React from 'react'
import {Menu} from 'antd';
import {
    HomeOutlined,
    LoginOutlined,
} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const MENU_ITEMS = [
    {
        key: 'Home',
        icon: <HomeOutlined />,
        text: 'Home',
        link: '/',
    },
    {
        key: 'signup',
        icon: <LoginOutlined />,
        text: 'SignUp',
        link: '/signup',
    },
]

function Navbar() {
    return (
        <Menu mode="horizontal">
            {
                MENU_ITEMS.map((item, index) => (
                    <Menu.Item key={item.key} icon={item.icon} >
                        <Link to={item.link} >{item.text}</Link>
                    </Menu.Item>
                ))
            }
        </Menu>
    )
}

export default Navbar
