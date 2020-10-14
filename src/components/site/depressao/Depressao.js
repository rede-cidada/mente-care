import React from 'react';
import './depressao.css';
import foto2 from './img-depressao/2.png';
import foto4 from './img-depressao/4.png';
import foto5 from './img-depressao/5.png';
import mulhertriste from './img-depressao/mulher-triste.png'
const Depressao = () => (
    <div className="depressao-content">

    <section className="depre-section1">
      <div className="depre-info">
        <h1 className="infor1">Depressão</h1>
        <div className="parte1">
          <p className="depre-txt">
          A depressão é uma doença psiquiátrica crônica. 
          Muitas vezes é confundida com ansiedade e pode levar a pensamentos suicidas.
          Há uma grande diferença entre tristeza e depressão.
          A tristeza pode ocorrer desencadeada por algum fato do cotidiano, 
          em que a pessoa realmente sofre com aquilo até assimilar o que está acontecendo 
          e geralmente não dura mais do que quinze a vinte dias. Já a depressão se não for 
          tratada pode piorar e passar por três estágios: leve , moderada e grave.
          Quem sofre com essa condição pode também ter múltiplas queixas físicas sem 
          nenhuma causa aparente. A depressão pode ser de longa duração ou recorrente, 
          prejudicando substancialmente a capacidade das pessoas de serem funcionais no
          trabalho ou na escola, assim como a capacidade de lidar com a vida diária. 
          Em seu estado mais grave, a depressão pode levar ao suicídio.
          </p>
          <img className="figure1" src={foto5} alt="jovem triste" />
       </div>
       <div className="parte2">
         <h2 className="infor2">Causas</h2>
           <p className="depre-txt2"> 
           A depressão é causada tanto por fatores genéticos e biológicos,
            quanto por fatores externos. E pode tanto surgir sem motivo aparente 
            como ser a consequência de um evento importante, como divórcio, falência, perda de
            emprego ou morte de uma pessoa próxima. Esses fatores desencadeiam sentimentos 
            de tristeza e, em certos casos, depressão. A doença não está necessariamente 
            alinhada aos acontecimentos. Tudo pode estar correndo muito bem na vida de uma pessoa deprimida, 
            mas ela vai continuar apresentando os sinais da doença até que busque tratamento.  
            É importante lembrar que não existe apenas um fator determinante para depressão. 
            A doença é causada pela soma desses fatores, sendo que um pode contribuir 
            com o outro de forma que minimize a capacidade do nosso cérebro de reagir
            a determinados eventos, surgindo alguns sintomas prolongados e, consequentemente, a depressão. </p>
          <img className="fig2" src={foto2} alt="mulher cobrindo a tristeza" />
       </div>
       <div className="parte3">
         <ul className="ul-causas">
           <li className="li-causas">Predisposição genética.</li>
           <li className="li-causas">Situação de estresse emocional prolongado ou de grande intensidade.</li>
           <li className="li-causas">Alterações nos processos químicos cerebrais.</li>
           <li className="li-causas">Fatores socioambientais.</li>
           <li className="li-causas">Morte de alguém muito importante.</li>
           <li className="li-causas">Traumas físicos e psicológicos.</li>
           <li className="li-causas">Uso desenfreado das redes sociais.</li>
           <li className="li-causas">Dietas ricas em açúcar,sedentarismo, substâncias tóxicas 
           ao organismo, como álcool, drogas e até mesmo alguns medicamentos.</li>
         </ul>
         <img className="figure3" src={mulhertriste} alt="mulher chorando na janela" />
       </div>
       <div className="parte4">
         <div className="" >
           <h2 class="infor3">Sintomas</h2>
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
             <img className="figure4" src={foto4} alt="moça triste" />
           </div>
      </div>
    </div>
    </section>

</div>
);


export default Depressao