import React from 'react'
import './footer.css'
import mentelogo from '../header/assets/SVG/Ativo 5.png'
import instagram from './assets/icon-instagram.png';
import facebook from './assets/icon-facebook.png';
import twitter from './assets/icon-twitter.png';


const Footer = () => (
  <footer className="footer-container">
    <div className="footer-content">
      <div className="txt-box">
        <div className="box">
          <ul className="list">
            <li className="list-list">Sobre</li>
            <li className="list-list">Quem Somos</li>
            <li className="list-list">Fale Conosco</li>
          </ul>
        </div>

        <div className="box">
         <img className="footer-logo" src={mentelogo} alt="logo"/>
      
        </div>

        <div className="box">
          <p className="txt">
          A Mente Care tem por objetivo ajudar pessoas a encontrar atendimento 
          psicológico acessível e próximo a sua localidade.
             </p>
        </div>
      </div>
    </div>
    <div className="copyr">
      <p>fale@mentecare.com.br</p>
    </div>
    <div className="copyr-icones">
    <p>Siga a Mente Care</p>
    </div>

    <article className="copyr-icones2">
    <a href="https://www.instagram.com/" target="_blank"><img src={instagram} /></a>
    <a href="https://www.facebook.com/" target="_blank"><img src={facebook} /></a>
    <a href="https://www.twitter.com/" target="_blank"><img src={twitter} /></a>
    </article>

  </footer>

)

export default Footer
