import React from "react";

import Search from './assets/search.png'
import "./homecontent.css"
import Svgs from '../universalComponents/backgroundSvg/Svgs'
import { Link } from "react-router-dom";



const HomeContent = () =>  (

    <div className='home'>
      <Svgs />
      <h1 className='home-titulo'><span className="dark">M</span>ente <span className="dark">C</span>are</h1>
      <p className='home-paragrafo'>Encontre clínicas próximo a sua localidade</p>
      <form className='form' action="search">
        <input className='home-input' type='text' placeholder='Ex: Rua Nova Roma' />
        <button className='home-button'><Link to="/list"><img src={Search} width="20" alt="" /></Link></button>
      </form>
      <h3 className='home-h3'>OU veja algumas opções perto de você</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15797.248322967373!2d-34.93949680298508!3d-8.171281031912823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospitais!5e0!3m2!1spt-BR!2sbr!4v1601579258213!5m2!1spt-BR!2sbr" width="350" height="250" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

    </div>
  );

export default HomeContent;
