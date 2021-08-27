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

function Navbar(props) {

    const handleClick = (e) => {
        props.history.push(e.key)
    }

    const currentPage = props.history.location.pathname;

    return (
        <Menu mode="inline" selectedKeys={currentPage} >
            {
                MENU_ITEMS.map((item, index) => (
                    <Menu.Item key={item.link} icon={item.icon} >
                        <Link to={item.link} >{item.text}</Link>
                    </Menu.Item>
                ))
            }
        </Menu>
    )
}

export default Navbar
