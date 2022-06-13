import './Login.css';
import { useState, useContext } from 'react';

import { AuthContext } from '../contexts/auth';

export function Login() {

    const {authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const manipulateLogin = (e) => {
        e.preventDefault();
        console.log("submit",{email, password});
        login(email, password); 
    }

    return (

            <div className="container">

                <div className="left">
                    <div className="headline">
                        <h1>Login Administrador</h1>
                    </div>

                    <form onSubmit={manipulateLogin}>

                        <input 
                        type="text" 
                        name='email' 
                        placeholder="E-mail" 
                        value={email} 
                        required
                        onChange={(e) => setEmail (e.target.value)}/>

                        <input 
                        type="password" 
                        value={password} 
                        name='senha' 
                        placeholder="Senha"
                        onChange={(e) => setPassword (e.target.value)}
                        />

                        <a href="/#">Não consegue acessar sua conta?</a>

                        <input type="submit" value="Entrar" required />

                    </form>

                </div>

            </div>


    );
}