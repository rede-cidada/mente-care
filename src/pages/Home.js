import React from 'react'
import Header from '../components/universalComponents/header/Header'
import HomeContent from '../components/homeComponents/homeContent/HomeContent'
import Footer from '../components/universalComponents/footer/Footer'
import './home.css'

function App() {
  return (
     < div className="container">
      <Header />
      <HomeContent />
      <Footer />
     </div>
  )
}

export default App
