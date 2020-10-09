import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from '../../components/universalComponents/header/Header'
import Footer from '../../components/universalComponents/footer/Footer'
import Routes from '../../routes'

import './home.css'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
          <Routes/>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
