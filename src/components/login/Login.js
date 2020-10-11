import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import './Login.css'
import Svgs from '../universalComponents/backgroundSvg/Svgs'
import Paciente from '../../services/Paciente'
import sorrir from './assets/brain.png'

const Login = () => {

    let history = useHistory();
    const [value, setValue] = useState("");
    const [values, setValues] = useState("");

    const [error, setError] = useState(false)

    const deslogar = () => {
        let i
        for (i = 0; i < Paciente.length; i++) {
            Paciente[i].on = 0
            Paciente[i].logado = false
        }
    }

    const autenticar = () => {
        let i
        for (i = 0; i < Paciente.length; i++) {
            if (Paciente[i].login === value && Paciente[i].senha === values) {
                history.push("/");
                Paciente[i].logado = true
                Paciente[0].on = 1
                setError(!error)
            }
            else {
                setError(!error)

            }
        }
    }

    const autenticado = () => {
        if (Paciente[0].on === 1) {
            return (
                <>
                    <img className="img-login" src={sorrir} alt="sorrindo" width="200" />
                    <h1 className="home-titulo-ls">
                        Olá, parece que você já tá logado !
                     </h1>

                    <Link className="linkbtn" to="/" onClick={deslogar} >Clique aqui caso você queira sair </Link>

                    <Link className="linkbtn linkdark" to="/">Mas se você ainda quiser continuar conosco, só basta clicar em mim !</Link>
                </>

            )
        } else {
            return (
                <>
                    <div className={error === false ? "msgError" : "msgError show-msgError"}>
                        Email ou senha inválidos
                </div>
                    <div className="login-form" action="">
                        <legend><span>Entrar</span></legend>
                        <input className={error === false ? "login-inputs" : "login-inputs inputs-error"} value={value} onChange={(e) => setValue(e.target.value)} type='email' placeholder='Email' />
                        <input className={error === false ? "login-inputs" : "login-inputs inputs-error"} onChange={(e) => setValues(e.target.value)} type='password' placeholder='Senha' />



                        <Link to="/cadastroPaciente" className="link-footer">Ainda não cadastrado ? Cadastre-se agora</Link>
                        <button className="login-button" onClick={autenticar} >Entrar</button>
                    </div>

                    <Link to="/cadastro" className="link help">Eu quero Ajudar!</Link>
                </>)
        }
    }

    return (
        <section className="option-area">
            <Svgs />
            {autenticado()}
        </section>
    )
}
export default Login