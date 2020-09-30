import React from 'react'
import './footer.css'
import mentelogo from '../header/assets/SVG/Ativo 5.png'


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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             </p>
        </div>
      </div>
    </div>
    <div className="copyr">
      <p>Copyright</p>
    </div>







  </footer>

)

export default Footer
