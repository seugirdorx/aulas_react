import React from 'react'
import './Home.css'

function Home() {
    return(
    <form className='background center'>
        <h1 className='fonte'>Bem vindo!</h1>
        <h2 className='fonte'>Faça login para continuar</h2>
    <label>
    Email:
    <input type="text" name="email" />
    </label>
    <input type="submit" value="Enviar" />
    <br />
    <label>
    Senha:
    <input type="text" name="senha" />
    </label>
    <input type="submit" value="Enviar"/>
    </form>

    );

}
export default Home;