import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import './Login.css'
import Svgs from '../universalComponents/backgroundSvg/Svgs'
import Paciente from '../../services/Paciente'
import { Dark } from '../../services/Dark'
const Login = () => {

    let history = useHistory();
    const [value, setValue] = useState("");
    const [values, setValues] = useState("");

    const [error, setError] = useState(false)

    const autenticar = () => {
        let i
        for (i = 0; i < Paciente.length; i++) {
            if (Paciente[i].login === value && Paciente[i].senha === values) {
                Paciente[0].on = 1
                Paciente[i].logado = true
                history.push("/");
                setError(!error)
            }
            else {
                setError(!error)

            }
        }
    }

    return (
        <section className="option-area">
            <Svgs />
            <div className={error === false ? "msgError" : "msgError show-msgError"}>
                Email ou senha inválidos
                </div>
            <div className="login-form" action="">
                <legend><span>Entrar</span></legend>
                <input className={error === false ? "login-inputs" : "login-inputs inputs-error"} value={value} onChange={(e) => setValue(e.target.value)} type='email' placeholder='Email' />
                <input className={error === false ? "login-inputs" : "login-inputs inputs-error"} onChange={(e) => setValues(e.target.value)} type='password' placeholder='Senha' />



                <Link to="/cadastroPaciente" className={Dark[0].dark === "" ? "linkLogin" : "linkLogin linkLogindark"}>Ainda não cadastrado ? Cadastre-se agora</Link>
                <button className="login-button" onClick={autenticar} >Entrar</button>
            </div>

            <Link to="/cadastro" className="link help">Eu quero Ajudar!</Link>
        </section>
    )
}
export default Login