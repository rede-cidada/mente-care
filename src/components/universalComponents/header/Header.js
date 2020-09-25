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

                <h1 className="Logo" >Logo</h1>

                <div className="menu-mobile" onClick={show} >
                    <div className="hamburguer"></div>
                </div>


                <ul className={showMenu !== true ? 'ul-header' : 'ul-header show-ul'}>

                    <li className="li-header"><Link to="/about">Sobre</Link></li>
                    <li className="li-header"><Link to="/aboutUs">Quem Somos</Link></li>
                    <li className="li-header">Fale Conosco</li>
                    <li className="li-header">ENTRAR</li>

                </ul>

            </nav>
        </header>

    )
}




export default Header 