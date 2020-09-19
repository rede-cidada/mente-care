import React from "react";
import Map from "../../../assets/img/mapa.jpeg";
import "./homecontent.css"
import Svgs from '../backgroundSvg/Svgs'


const HomeContent = () => (

  <div className='home'>
    <Svgs />
    <h1 className='home-titulo'>Mente Care</h1>
    <p className='home-paragrafo'>Encontre clínicas próximo a sua localidade</p>  
    <input className='home-input' type='text' placeholder='Ex: Rua Nova Roma' />
    <h3 ClassName='home-h3'>Algumas opções perto de você</h3>
    <img className='home-img' src={Map} alt='mapa de um bairro' width='250' />

  </div>
);

export default HomeContent;
