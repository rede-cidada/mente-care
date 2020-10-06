import React from 'react'
import Svgs from '../../components/universalComponents/backgroundSvg/Svgs'
import Img from './assets/mapss.png'
import "../about/about.css"

const About = () => (
    <>


        <section className="box-about">  
        <h1 className="title">O que esperar do APP ?</h1>
        <Svgs />
    
            <div className="box-img">
               
                <img className="img-about" src={Img} alt="imagem de um mapa" />
            </div>
      
            <div className="box-description">
                <h2 className="description">Agendar consultas não precisa ser complicado. O Mente Care conecta pacientes a especialistas da saúde</h2>
            </div>

        </section>
    </>
)

export default About