import React from 'react'
import Header from '../components/homeComponents/header/Header'
import HomeContent from '../components/homeComponents/homeContent/HomeContent'
import Footer from '../components/homeComponents/footer/Footer'
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
