import './Cards.css';
import 'antd/dist/antd.css';

import { useNavigate } from "react-router-dom";

export function Cards() {
    const navigate = useNavigate();

    const irCadastro = (e) => {
        e.preventDefault();
        navigate("/dashboard/cadastro");
    }

    return (

        <div
            className="site-layout-background"
            style={{
                padding: 24,
                minHeight: 360,
            }}
        >
            <div className='cards__style'>

                <a href="/#" onClick={irCadastro}>   
                <div className='card__cadastro'>
                    <p>Cadastrar Aluno</p>
                </div>
                </a>
                   <a href="/#">   
                <div className='card__cadastro'>
                    <p>Cadastrar Professor</p>
                </div>
                </a>

                <a href="/#">   
                <div className='card'>
                    <p>Consultar Alunos</p>
                </div>
                </a>

                <a href="/#">   
                <div className='card'>
                    <p>Consultar professores</p>
                </div>
                </a>

            </div>
        </div>


    );
}