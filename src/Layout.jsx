import React from 'react';
import './App.css'
import { Outlet } from "react-router";
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const items1 = ['Dashboard', 'Learn', 'Quiz'].map(key => ({
    key,
    label: `${key}`,
}));

const LayoutApp = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (

            <Layout>
                <Header style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="demo-logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={items1}
                        style={{ flex: 1, minWidth: 0 }}
                    />
                </Header>
                <div style={{ padding: '0 48px', marginTop: '30px' }}>
                    <Layout
                        style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
                    >
                        <Content style={{ padding: '0 24px', minHeight: 280 }}><Outlet /></Content>
                    </Layout>
                </div>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>


    );
};
export default LayoutApp;
