import './DashboardCadastro.css';
import 'antd/dist/antd.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Cadastro } from '../../Componentes/Cadastro/Cadastro';
import { AuthContext } from '../../../contexts/authAdmin';
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

export function DashboardCadastro() {

    const navigate = useNavigate();

    const { logout } = useContext(AuthContext);

    const irInicio = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    }

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
                        <a href="/dashboard" onClick={irInicio}>Cadastro</a>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <a href="/dashboard">Configurações</a>
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
                <Cadastro />
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