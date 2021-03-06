import { useContext } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { DashboardCadastro } from './pages/DashboardCadastro';
import { RecuperaSenha } from './pages/RecuperarSenha';

import { AuthProvider, AuthContext } from './pages/contexts/auth';

const AppRoutes = () => {

    const Private = ({ children }) => {

        const { authenticated, loading } = useContext(AuthContext);
   
        if (loading) {
            return <div>Carregando...</div>;
        }

        if (!authenticated) {
            
            return <Navigate to="/" />;
        }

        return children;

    }

    return (

        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/recuperar" element={<RecuperaSenha />} />
                    <Route
                        path="/dashboard"
                        element={
                            <Private>
                                <Dashboard />
                            </Private>
                        }
                        />
                    <Route
                        path="/dashboard/cadastro"
                        element={
                            <Private>
                                <DashboardCadastro />
                            </Private>
                        }
                        />
                </Routes>
            </AuthProvider>
        </Router>
    )
} 

export default AppRoutes;