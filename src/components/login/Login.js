import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import './Login.css'
import Svgs from '../universalComponents/backgroundSvg/Svgs'

const Login = () => {
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");
    
    const autenticar = () => {
        if (value !== "teste" && value2 !== "teste") {
            return <Redirect to="/" />
          
        } else (
            alert("asd")
        )
    }

    return (
        <section className="option-area">
            <Svgs />


            <form className="login-form" action="">
                <legend>Entrar</legend>
                <input className='login-inputs' value={value} onChange={(e) => setValue(e.target.value)} type='text' placeholder='Email' />
                <input className='login-inputs' value={value2} onChange={(e) => setValue2(e.target.value2)} type='text' placeholder='Senha' />
                <Link className="link-footer">Ainda não cadastrado ? Cadastre-se agora</Link>
                <button className="login-button" onClick={autenticar}>Entrar</button>
            </form>


            <Link to="/cadastro" className="link help">Eu quero Ajudar!</Link>
        </section>
    )
}
export default Login