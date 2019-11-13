import React from 'react'
import { Button, Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link to="/">
                    List Password
                </Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to="/form">
                    Password Form
                </Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <h2>React Password Manager</h2>
            <Dropdown overlay={menu} trigger={['click']}>
                <Button type="primary" icon="menu" size={"large"}>React Password Manager</Button>
            </Dropdown>
        </>
    )
}