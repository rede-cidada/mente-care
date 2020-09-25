import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../../components/universalComponents/header/Header'
import HomeContent from '../../components/homeContent/HomeContent'
import About from '../../components/about/About'
import Footer from '../../components/universalComponents/footer/Footer'
import AboutUs from '../../components/aboutUs/aboutUs'
import './home.css'
import ErrorPage from '../../components/errorPage/ErrorPage'
import Svgs from '../../components/universalComponents/backgroundSvg/Svgs'
import Cadastro from '../../components/cadastro/Cadastro'


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
          
          <Route exact path="/aboutUs">
            <AboutUs />
          </Route>
    
          <Route exact path="/cadastro">
            <Cadastro />
          </Route>

          <Route >
            <ErrorPage />
          </Route>

        </Switch>
        
        

        <Footer />
      </div>

    </BrowserRouter>

  )
}

export default App
