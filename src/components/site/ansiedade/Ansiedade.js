import React from "react";
import './ansiedade.css';
import clock from './img-ansiedade/clock.jpg';
import garotanervosa from './img-ansiedade/garota-nervosa.jpg';
import homemtrabalhando from './img-ansiedade/homem-trabalhando.png';
import meninoestressado from './img-ansiedade/menino-estressado.jpg'

const Ansiedade = () => (
    <div className="landing-content">
<<<<<<< HEAD:src/components/landingPage/LandingPage.js
    <section className="slider-section">
      <div className="sliderBx">
      </div>
    </section>
=======

>>>>>>> e6a98eeed8e274146cd899e314291f6dd8c2b02c:src/components/site/ansiedade/Ansiedade.js
    <section className="info-section1">
      <div className="ansiedade-info">
        <h1 className="info1">Transtorno de Ansiedade</h1>
        <div className="part1">
          <p className="ansiedade-txt">
             Sentir ansiedade é normal pois é uma reação natural do corpo ao stress.
             Em seu estado normal é saudável para o indivíduo, pois ela o impulsiona 
             para realizar projetos e planejar o futuro. 
             Apesar de caracterizada por sentimentos de tensão, preocupação e 
             pensamentos ruins nem sempre a ansiedade é uma doença. Porém, 
             dependendo da frequência e intensidade dos sintomas - e de quando passa 
             a se tornar excessiva a ponto de interferir no trabalho, relacionamentos
             e em outras partes da vida - pode se tornar patologica.
             Tanto a ansiedade quanto o medo, não surgem na 
             vida da pessoa por uma escolha. Acredita-se que vivências interpessoais 
             e problemas na primeira infância possam ser importantes causas desses sintomas.</p>
          <img className="fig1" src={garotanervosa} alt="jovem ansiosa" />
       </div>
       <div className="part2">
         <h2 className="info2">Causas</h2>
           <p className="ansiedade-txt2"> 
             Não se sabe ao certo as causas de ansiedade, mas há fatores que podem
             influenciar uma pessoa a desenvolver ou estar mais predisposta a 
             esse distúrbio. Fatores esses que, sozinhos ou combinados, podem vir a 
             desencadear o transtorno de ansiedade, tais como: traumas, estresse, 
             genética, doenças físicas e até mesmo a depressão. É comum o paciente 
             alternar entre quadros de ansiedade e quadros de depressão, pois uma 
             condição pode gerar a outra.</p>
          <img className="fig2" src={homemtrabalhando} alt="homem trabalhando sob estresse" />
       </div>
       <div className="part3">
         <ul className="ul-causas">
           <li className="li-causas">Genética: histórico de transtorno de ansiedade na família</li>
           <li className="li-causas">Traumas passados: como perda de um ente e acidentes marcantes</li>
           <li className="li-causas">Problemas na infância</li>
           <li className="li-causas">Doenças físicas</li>
           <li className="li-causas">Problemas cardíacos como as arritmias</li>
           <li className="li-causas">Doenças hormonais como hipertireoidismo e hiperadrenocorticismo</li>
           <li className="li-causas">Problemas respiratórios como doença pulmonar obstrutiva crônica</li>
           <li className="li-causas">Abuso de drogas, álcool ou medicação, como os benzodiazepínicos</li>
           <li className="li-causas">Carga de trabalho extenuante</li>
         </ul>
         <img className="fig3" src={clock} alt="pessoas correndo contra o tempo no trabalho" />
       </div>
       <div className="part4">
         <div className="" >
           <h2 class="info3">Sintomas</h2>
         </div>
           <div className="row-lista-img">
             <ul className="ul-sintomas">
               <li className="li-sintomas">Enxergar perigo em tudo;</li>
               <li className="li-sintomas">Apetite desregulado;</li>
               <li className="li-sintomas">Alterações de sono;</li>
               <li className="li-sintomas">Tensão Muscular;</li>
               <li className="li-sintomas">Medo de falar em público;</li>
               <li className="li-sintomas">Preocupações em excesso;</li>
               <li className="li-sintomas">Ficar sempre próximo de ataques de nervos;</li>
               <li className="li-sintomas">Medos irracionais;</li>
               <li className="li-sintomas">Inquietação constante;</li>
               <li className="li-sintomas">Sintomas físicos;</li>
               <li className="li-sintomas">Pensamentos obsessivos;</li>
               <li className="li-sintomas">Perfeccionismo;</li>
               <li className="li-sintomas">Problemas digestivos.</li>
             </ul>
             <img className="fig4" src={meninoestressado} alt="criança sob estresse" />
           </div>
      </div>
    </div>
    </section>

</div>
);

 



export default Ansiedade;