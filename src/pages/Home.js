import React from 'react'
import Header from '../components/header/Header'
import Background from '../components/backgroundSvg/Background'
import HomeContent from '../components/homeContent/HomeContent'

function App() {
  return (
    <div className="container">
    <Background />
      <Header />
      <HomeContent />
    </div>
  )
}

export default App
