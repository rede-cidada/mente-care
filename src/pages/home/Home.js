import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../../components/universalComponents/header/Header'
import HomeContent from '../../components/homeContent/HomeContent'
import About from '../../components/about/About'
import Footer from '../../components/universalComponents/footer/Footer'
import './home.css'

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

        </Switch>

        <Footer />
      </div>

    </BrowserRouter>

  )
}

export default App
