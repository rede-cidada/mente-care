import React, { useState } from 'react';
import './headerLandingPage.css';
import { Link } from "react-router-dom"

const HeaderLandingPage = () => {
    const [showMenu, setShowMenu] = useState(false)

    const show = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className="header-content">
            <nav className="navBar">
          
              <h2 className="logo"><Link className="logo" to="/">Mente Info</Link></h2> 

                <div className="menu-mobile" onClick={show} >
                    <div className="hamburguer"></div>
                </div>
           

                <ul className={showMenu !== true ? 'ul-header' : 'ul-header show-ul'}>

                    <li className="li-header"><Link onClick={show} className="link" to="/">Blog</Link></li>
                    <li className="li-header"><Link onClick={show} className="link" to="/ansiedade">Ansiedade</Link></li>
                    <li className="li-header"><Link onClick={show} className="link" to="/depressao">Depressão</Link></li>
                    <li className="li-header"><Link onClick={show} className="link" to="/ajuda">Ajuda</Link></li>
                </ul>
            </nav>
        </header>
    )
}


export default HeaderLandingPage