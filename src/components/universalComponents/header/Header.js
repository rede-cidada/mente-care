import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    const show = () => {
        setShowMenu(!showMenu)
        console.log(showMenu)

    }

    return (

        <header className="header-content">
            <nav className="navBar">

              <Link  className="link logo" to="/">MC</Link> 

                <div className="menu-mobile" onClick={show} >
                    <div className="hamburguer"></div>
                </div>


                <ul className={showMenu !== true ? 'ul-header' : 'ul-header show-ul'}>

                    <li className="li-header"><Link className="link" to="/about">Sobre o App</Link></li>
                    <li className="li-header"><Link className="link" to="/aboutUs">Quem Somos</Link></li>
                    <li className="li-header">Fale Conosco</li>
                    <li className="li-header"><Link className="link" to="/cadastro">Entrar</Link></li>

                </ul>

            </nav>
        </header>

    )
}




export default Header 