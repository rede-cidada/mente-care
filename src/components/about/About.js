import React from 'react'
import Svgs from '../../components/universalComponents/backgroundSvg/Svgs'
import Img from './assets/img-about.jpeg'
import "../about/about.css"

const About = () => (
    <>
 <Svgs />
        <section className="box-about">  
        
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