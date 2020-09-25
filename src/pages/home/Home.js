import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../../components/universalComponents/header/Header'
import HomeContent from '../../components/homeContent/HomeContent'
import About from '../../components/about/About'
import Footer from '../../components/universalComponents/footer/Footer'
import Cadastro from '../../components/cadastro/Cadastro'
import './home.css'
<<<<<<< HEAD
import AboutUs from '../../components/aboutUs/aboutUs'
=======
import  Svgs from '../../components/universalComponents/backgroundSvg/Svgs'
>>>>>>> a4fe7e9038c790bdc7447186c7371bed6f5b14d6

function App() {
  return (
    <BrowserRouter>
      < div className="container">

        <Header />

        <Switch>
          <Route exact path="/">
            <HomeContent />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
<<<<<<< HEAD

          <Route exact path="/aboutUs">
            <AboutUs/>
          </Route>
=======
>>>>>>> a4fe7e9038c790bdc7447186c7371bed6f5b14d6
        </Switch>

    < Svgs />
        <Footer />
      </div>

    </BrowserRouter>

  )
}

export default App
