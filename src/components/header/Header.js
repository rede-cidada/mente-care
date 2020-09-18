import React from 'react'
import './header.css'

const Header = () => (
    <header className="header-content">
        <nav className="navBar">

            <h1 className="Logo">Logo</h1>

            <div className="menu-mobile">
                <div className="hamburguer"></div>
            </div>

            <ul className="ul-header">
                <li className="li-header">Sobre</li>
                <li className="li-header">Quem Somos</li>
                <li className="li-header" >Fale Conosco</li>
                <li className="li-header">ENTRAR</li>
            </ul>
        </nav>
    </header>
)

export default Header 