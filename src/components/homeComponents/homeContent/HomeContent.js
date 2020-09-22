import React from "react";
import Map from "../../../assets/img/mapa.jpeg";
import Search from '../../../assets/img/search.png'
import "./homecontent.css"
import Svgs from '../backgroundSvg/Svgs'



const HomeContent = () => (

  <div className='home'>
    <Svgs />
    <h1 className='home-titulo'>Mente Care</h1>
    <p className='home-paragrafo'>Encontre clínicas próximo a sua localidade</p>  
    <form className='form' action="search">
    <input className='home-input' type='text' placeholder='Ex: Rua Nova Roma' />
    <button className='home-button'><img src={Search} width="20" alt=""/></button>
    </form>
    <h3 className='home-h3'>Algumas opções perto de você</h3>
    <img className='home-img' src={Map} alt='mapa de um bairro'  />

  </div>
);

export default HomeContent;
