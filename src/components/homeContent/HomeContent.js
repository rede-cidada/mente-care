import React from "react";
import Map from "./assets/mapa.jpeg";
import Search from './assets/search.png'
import "./homecontent.css"
import Svgs from '../universalComponents/backgroundSvg/Svgs'
import { Link } from "react-router-dom";



const HomeContent = () => (

  <div className='home'>
    <Svgs />
    <h1 className='home-titulo'><span className="dark">M</span>ente <span className="dark">C</span>are</h1>
    <p className='home-paragrafo'>Encontre clínicas próximo a sua localidade</p>
    <form className='form' action="search">
      <input className='home-input' type='text' placeholder='Ex: Rua Nova Roma' />
      <button className='home-button'><Link to="/list"><img src={Search} width="20" alt="" /></Link></button>
    </form>
    <h3 className='home-h3'>OU veja algumas opções perto de você</h3>
    <img className='home-img' src={Map} alt='mapa de um bairro' />

  </div>
);

export default HomeContent;
