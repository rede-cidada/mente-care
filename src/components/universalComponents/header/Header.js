import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './header.css'
import mentelogo from './assets/SVG/Ativo 5.png'
const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    const show = () => {
        setShowMenu(!showMenu)

    }

    return (

        <header className="header-content">
            <nav className="navBar">

                <Link  to="/"><img className="logo" src={mentelogo} alt="" /></Link>

                <div className="menu-mobile" onClick={show} >
                    <div className="hamburguer"></div>
                </div>


                <ul className={showMenu !== true ? 'ul-header' : 'ul-header show-ul'}>

                    <li className="li-header"><Link onClick={show} className="link" to="/about">Sobre o App</Link></li>
                    <li className="li-header"><Link onClick={show} className="link" to="/aboutUs">Quem Somos</Link></li>
                    <li className="li-header"><Link onClick={show} className="link" to="/faleConosco">Fale conosco</Link></li>
                    <li className="li-header"><Link onClick={show} className="link" to="/entrar">Entrar</Link></li>

                </ul>

            </nav>
        </header>

    )
}




export default Header 