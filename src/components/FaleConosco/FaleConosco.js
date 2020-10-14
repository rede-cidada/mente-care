import React, { useState } from 'react';
import './faleConosco.css';
import Svgs from '../../components/universalComponents/backgroundSvg/Svgs'
import call from './assets/video-calling.png'

const FaleConosco = () => {
   const [valorNome, setvalorN] = useState('')
   const [valorEmail, setvalorE] = useState('')
   const [valorCelular, setvalorC] = useState('')
   const [valorTexto, setvalorT] = useState('')

   const [Resposta, setresposta] = useState('faleConosco-Resposta-Mensagem')
   const [Mensagem, setmensagem] = useState('')

   const ValidandoDados = () => {
      if (valorNome === '' || valorEmail === '' || valorCelular === '' || valorTexto === '') {
         return (setresposta('faleConosco-Resposta-Mensagem faleConosco-Resposta'),
            setmensagem('Dados incompletos')
         )
      }
      else {
         return (
            setvalorN(""),
            setvalorE(""),
            setvalorC(""),
            setvalorT(""),
            setresposta('faleConosco-Resposta-Mensagem faleConosco-Resposta faleConosco-Resposta-Verdade'),
            setmensagem('Obrigada pela sua mensagem! Em breve entraremos em contato.')
         )
      }
   }

   return (

      <div className='container-faleConosco'>
         <Svgs />

         <div className="mensagem-area">
            <div className={Resposta}>{Mensagem}</div>
         </div>
         <div className='faleConosco-texts'>
            <h1 className='faleConosco-texts1'><span>Quer falar com a gente?</span></h1>

            <p className='faleConosco-texts2'>É só mandar sua mensagem por aqui ou por nossas redes.</p>
            <p className='faleConosco-texts2'></p>
         </div>
         <div className='faleConosco-form-area'>
            <div className='faleConosco-form-area2'>
               <div className='faleConosco-form'>
                  <input className='faleConosco-form-input' type='text' placeholder='Nome completo' value={valorNome} onChange={(e) => setvalorN(e.target.value)}
                  />
                  <input className='faleConosco-form-input' type='email' placeholder='Email' value={valorEmail} onChange={(e) => setvalorE(e.target.value)} />
                  <input className='faleConosco-form-input' type='text' placeholder='Celular' value={valorCelular} onChange={(e) => setvalorC(e.target.value)} />
                  <textarea rows="5" cols="5" className='faleConosco-form-msg' placeholder='Digite aqui sua mensagem' value={valorTexto} onChange={(e) => setvalorT(e.target.value)}></textarea>
                  <button className='faleConosco-form-button' onClick={ValidandoDados}>Enviar</button>
               </div>

            </div>

            <img className="img-faleconosco" src={call} alt="calling" />


         </div>
      </div>


   );
}

export default FaleConosco;