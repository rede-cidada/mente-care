import React, { useEffect, useState } from "react";

import Search from './assets/search.png'
import "./homecontent.css"
import Svgs from '../universalComponents/backgroundSvg/Svgs'
import { Link } from "react-router-dom";

const HomeContent = () => {
  const [valor, setValue] = useState("");
  const [busca, setBusca] = useState("");
  const [date, setDate] = useState([]);
  const [showList, setShowList] = useState(false)


  useEffect(() => {
    const getData = async () => {
      const materiais = await fetch(
        'https://raw.githubusercontent.com/rede-cidada/fake-data-api/main/mente-care/data.json'
      );
      const data = await materiais.json();

      setDate(data);
    };
    getData();
  }, []);

  return (
    <>

      <div className='home'>

        <h1 className='home-titulo'><span className="dark">M</span>ente <span className="dark">C</span>are</h1>
        <p className='home-paragrafo'>Encontre clínicas próximo a sua localidade</p>
        <div className='form' >
          <input className='home-input' type='text' placeholder='Ex: Rua Nova Roma' value={valor}
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
          <button className='home-button' onClick={() => {
            setBusca(valor)
            setShowList(!showList)
          }}  >
            <a href="#teste"> <img src={Search} width="20" alt="lupa" /> </a>
          </button>
        </div>

        <h3 className='home-h3'>OU veja algumas opções perto de você</h3>

        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15797.248322967373!2d-34.93949680298508!3d-8.171281031912823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospitais!5e0!3m2!1spt-BR!2sbr!4v1601579258213!5m2!1spt-BR!2sbr" width="320" height="220" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

      </div>

      <div className={showList !== true ? 'list-main' : 'list-main show-list'} >


     <h2 id="teste" className="list-title">Lista de Clínicas em {busca} </h2>



        {date.filter(dados => dados.cidade === busca).map(({ id, image, nome, descricao, cidade }) => (
          <div className="card-main" key={id}>
            <div className="img-card-area">
              <img className="img-card" src={image} alt="" />
            </div>
            <div className="card-infos">
              <h3> {nome}</h3>
              <h4> {cidade}</h4>
              <p> {descricao}</p>
              <button>Marcar</button>
            </div>
          </div>
        ))}


          <Link className="linktolist" to="/list"> Ir para todas as clínicas</Link>

          <Svgs />
      </div>



    </>

  );

}

export default HomeContent;
