import React from 'react';
import './cadastroPaciente.css';
import Svgs from '../../components/universalComponents/backgroundSvg/Svgs'
import lock from './assets/lock.png'

const CadastroPaciente = () => {




  return (
    <div className='content'>
      <Svgs />

      <section className='form-paciente-texts'>
        <h1 className='form-paciente-texts-titulo'><span>Cadastre-se</span></h1>
        <h2 className='form-paciente-texts-subtitulo'><span> e encontre atendimento psicólogico próximo a você!</span></h2>
      </section>
      <div className='form-paciente-inputs-geral'>
        <input className='form-paciente-inputs' type='text' placeholder='Nome completo' />
        <input className='form-paciente-inputs' type='date' placeholder='Data de nascimento' />
        <input className='form-paciente-inputs' type='text' placeholder='Telefone' />
        <input className='form-paciente-inputs' type='email' placeholder='Email' />
        <input className='form-paciente-inputs' type='text' placeholder='Senha' />
        <button className='form-paciente-button'>Realizar cadastro</button>
      </div>
      <img className="lock"src={lock} alt="lock"/>
    </div>

  );
}

  export default CadastroPaciente;