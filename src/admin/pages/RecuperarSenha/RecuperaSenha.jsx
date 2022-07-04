import './RecuperaSenha.css';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { useNavigate } from "react-router-dom";

export function RecuperaSenha() {

    const navigate = useNavigate();

    const voltar = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (

        <div className="container">
            
            <div className='back__btn'>
                <a href="/login" onClick={voltar}><ArrowLeftOutlined /></a>
            </div>

            <div className="left">
                <div className="headline">
                    <h1>Recuperar Senha</h1>
                </div>

                <form>
                    <input
                        type="text"
                        name='cpf'
                        placeholder="Digite seu CPF"
                    />

                    <input type="submit" value="Recuperar" required />

                </form>


            </div>

        </div>


    );
}