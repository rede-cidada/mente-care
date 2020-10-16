import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../../components/universalComponents/header/Header'
import HeaderLogged from '../../components/universalComponents/headerLogged/HeaderLogged'
import HomeContent from '../../components/homeContent/HomeContent'
import About from '../../components/about/About'
import Footer from '../../components/universalComponents/footer/Footer'
import AboutUs from '../../components/aboutUs/aboutUs'
import './home.css'
import ErrorPage from '../../components/errorPage/ErrorPage'
import Login from '../../components/login/Login'
import Cadastro from '../../components/cadastro/Cadastro'
import Modal from '../../components/modal/Modal'
import CadastroPaciente from '../../components/CadastroPaciente/CadastroPaciente'
import FaleConosco from '../../components/FaleConosco/FaleConosco'
import List from '../../components/list/list'
import { Dark } from '../../services/Dark'
import Paciente from '../../services/Paciente'

function App() {

  const [darkMode, setDark] = useState(false)

  darkMode === true ? Dark[0].dark = "dark" : Dark[0].dark = ""


  return (
    <BrowserRouter>
      < div className={`container ${Dark[0].dark}`}>
        {Paciente[0].on === 0 ? <Header /> : <HeaderLogged />}

        <button className={darkMode === true ? "button-darkMode" : "button-darkMode dark"} onClick={() => setDark(!darkMode)}>
          {darkMode === false ? "Dark" : "Light"}
        </button>

        <Switch>
          <Route exact path="/"  >
            <HomeContent />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/aboutUs">
            <AboutUs />
          </Route>

          <Route exact path="/cadastro">
            <Cadastro />
          </Route>

          <Route exact path="/modal">
            <Modal />
          </Route>

          <Route exact path="/cadastroPaciente">
            <CadastroPaciente />
          </Route>


          <Route exact path="/faleConosco">
            <FaleConosco />
          </Route>

          <Route exact path="/list">
            <List />
          </Route>

          <Route exact path="/entrar">
            <Login />
          </Route>

          <Route >
            <ErrorPage />
          </Route>

        </Switch>

        <Footer />
      </div>

    </BrowserRouter >

  )
}

export default App
