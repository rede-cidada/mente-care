import React from 'react';
import './cadastro.css';

const Cadastro = () => (
  <div className='content'>

    <section className='cadastro-texts'>
    <h1 className='cadastro-texts-titulo'>Divulgue sua Clínica</h1>
    <h2 className='cadastro-texts-subtitulo'> para ajudar pessoas</h2>
    </section>
    <div className='cadastro-div-inputs'>
    <input className='cadastro-inputs' type='text' placeholder='Nome da Clínica' />
    <input className='cadastro-inputs' type='text' placeholder='CNPJ' />
    <input className='cadastro-inputs' type='text' placeholder='Valor da consulta' />
    <input className='cadastro-inputs' type='text' placeholder='Descrição' />
    <input className='cadastro-inputs' type='text' placeholder='Senha' />
    <button className='cadastro-button'>Realizar cadastro</button>
  </div>
  </div>
  
);

export default Cadastro;
