import './Cadastro.css'

export function Cadastro() {
    
    return (
        <div className="container">
        <div className="left">

            <div className="headline">
                <h1>Cadastrar Aluno</h1>
            </div>

            <form action="dashboard/dashboard.html">
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Sobrenome"/>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Senha" required/>
                <input type="password" placeholder="Repetir Senha" required/>
                <input type="submit" value="Finalizar Cadastro" required/>
            </form>
            
        </div>

    </div>
    )

}