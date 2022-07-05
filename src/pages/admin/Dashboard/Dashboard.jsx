import './Dashboard.css';
import 'antd/dist/antd.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Cards } from "../../../Componentes/Cards/Cards";
import { AuthContext } from '../../../contexts/authAdmin';
import React, { useContext } from 'react';

import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

export function Dashboard() {

    const navigate = useNavigate();

    const irInicio= (e) => {
        e.preventDefault();
        navigate("/dashboard");
    }

    const { logout } = useContext(AuthContext);

    const logoutUser = (e) => {
        e.preventDefault();
        logout();
    }

    return (
        <Layout>
            <Header
                style={{
                    position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                }}
            >
                <div className='Position__logo'>
                    <a className="logo" href="/#" onClick={irInicio}>MyEdu</a>
                </div>

                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">
                        <a href="/#/" onClick={irInicio}>Cadastro</a>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <a href="/#/Dashboard">Configurações</a>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <a href="/login" onClick={logoutUser}>Sair</a>
                    </Menu.Item>
                </Menu>


            </Header>
            <Content
                className="site-layout"

            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                </Breadcrumb>
                <Cards />
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                MyEdu App ©2022 Created by MyEdu
            </Footer>
        </Layout>

    );
}