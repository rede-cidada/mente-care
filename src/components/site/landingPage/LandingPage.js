import React from 'react';
import './landingPage.css';
import foto3 from './img-landingpage/3.png'

const LandingPage = () => (
    <div className="landingpage">
        <section className="landing-section1">
             <div className="txt-div">
                 <h1 className="landing-title">
                     A saúde mental
                 </h1>
                 <p className="landing-txt">
                     é parte integral da saúde, é mais do que a 
                     ausência de doença, e está intimamente ligada com a saúde física e com o comportamento 
                 </p>
                <div className="txt-div2">
                    <p className="landing-txt2">
                        Navegue pelo site e saiba mais!
                    </p>
                </div>
             </div>
             <div className="img-div">
                 <img className="img-landingpage" src={foto3} alt=""></img> 
             </div>
        </section>
       <section className="lading-section2">
           <div className="info-content1">
               <div className="div-info1">
                   <h2 className="oms-title"> 
                   OMS
                   </h2>
                   <p className="oms-info1">
                   Segundo a Organização  Mundial de Saúde, a saúde mental é 
                   um estado de bem-estar no qual o indivíduo   exprime   as  
                   suas   capacidades,   enfrenta   os   stressores   normais   
                   da   vida,   trabalha produtivamente  e  de  modo  frutífero, 
                   e  contribui  para  a  sua  comunidade.
                   A carga dos transtornos mentais continua crescendo,
                   com impactos significativos sobre a saúde e as 
                   principais consequências sociais, de direitos 
                   humanos e econômicas em todos os países do mundo.
                   Existem diversos transtornos mentais, com 
                   apresentações diferentes. Eles geralmente são 
                   caracterizados por uma combinação de pensamentos, 
                   percepções, emoções e comportamento anormais, que 
                   também podem afetar as relações com outras pessoas.
                   </p>
                   <h3>Entre os transtornos mentais estão:</h3>
                   <div className="oms-row">
                       <ul className="oms-ul">
                           <li className="oms-li">Depressão</li>
                           <li className="oms-li">Transtorno afetivo bipolar</li>
                           <li className="oms-li">Deficiência intelectual</li>
                           <li className="oms-li">Transtornos de desenvolvimento</li>
                           <li className="oms-li">Ansiedade</li>
                       </ul>
                       <p className="txt-da-lista">
                       O acesso aos cuidados de saúde e aos serviços 
                       sociais capazes de proporcionar tratamento e apoio 
                       social é fundamental.Existem estratégias 
                       eficazes para a prevenção de transtornos mentais 
                       como a depressão.Há tratamentos eficazes para os 
                       transtornos mentais e maneiras de aliviar o sofrimento
                        causado por eles.
                       </p>
                   </div>
               </div>
           </div>
       </section>
       <section className="landing-section3">
           <div className="info-content2">
               <h2 className="brasil-title">
                   Brasil
               </h2>
               <p className="br-info">
               A população brasileira tem sido cada vez mais
                acometida por problemas de saúde mental. O
                suicídio já é a terceira principal causa 
                externa de mortes no Brasil, atrás de 
                acidentes e agressões. Entre jovens de 15 a 29 anos, 
                o suicídio foi a segunda maior causa de morte. Segundo a OMS, o número de 
                pessoas com transtornos mentais comuns, como a 
                depressão e o transtorno de ansiedade, cresce 
                especialmente em países de baixa renda. Os transtornos mentais são
                responsáveis por mais de um terço do número total de incapacidades 
                nas Américas. A depressão é o mal do século XXI e a ansiedade afeta 
                18,6 milhões de brasileiros.
               </p>
           </div>
       </section>
    </div>
)


export default LandingPage