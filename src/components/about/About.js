import React from 'react'
import Svgs from '../../components/universalComponents/backgroundSvg/Svgs'
import Img from './assets/mapss.png'
import "../about/about.css"
import { Link } from 'react-router-dom'

const About = () => (
    <>


        <section className="box-about">
            <h1 className="title"><span>O que esperar do APP ?</span></h1>
            <Svgs />

            <div className="box-infos">

                <div className="box-img">

                    <img className="img-about" src={Img} alt="imagem de um mapa" />
                </div>

                <div className="box-description">
                    <h2 className="description">Agendar consultas não precisa ser complicado. A Mente Care conecta pacientes a especialistas da saúde mental. Só basta procurar o local mais próximo de você</h2>

                        <Link className="buttonabout" to="/">Clique Aqui</Link>
                </div>
            </div>
        </section>
    </>
)

export default About