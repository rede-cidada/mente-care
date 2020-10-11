import React, { useEffect, useState } from "react";
import Search from './assets/search.png'
import "./homecontent.css"
import Svgs from '../universalComponents/backgroundSvg/Svgs'
import { Link } from "react-router-dom";
import Paciente from '../../services/Paciente'

const HomeContent = () => {
  const [valor, setValue] = useState("");
  const [busca, setBusca] = useState("");
  const [date, setDate] = useState([]);
  const [showList, setShowList] = useState(false)


  const titleLog = () => {
    let i = 0
    while (i < Paciente.length) {
      if (Paciente[i].logado === true) {
        return <h1 className='home-titulo-ls'>Que bom você por aqui {Paciente[i].nome} ! </h1>
      } else{
        i++
      }
    }

    return <h1 className='home-titulo'>Mente Care</h1>

  }


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

        {titleLog()}

        <p className='home-paragrafo'>Encontre clínicas próximo a sua localidade</p>
        <div className='form' >
          <input className='home-input' type='text' placeholder='Ex: Recife' value={valor}
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

        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26566.87386523531!2d-34.91813139110144!3d-8.183664029483205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spsic%C3%B3logos!5e0!3m2!1spt-BR!2sbr!4v1602417878000!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

      </div>

      <div className='list-main'>


        <h2 id="teste" className="list-title">Clínicas em {busca} </h2>

        {busca === "" ? <p>Você ainda não fez nenhuma busca</p> : (


          <div className="grid-card">



            {date.filter(dados => dados.cidade === busca).map(({ id, image, nome, descricao, cidade }) => (
              <div className="card-main" key={id}>

                <div className="rotate">

                  <div className="img-card-area">
                    <img className="img-card" src={image} alt="" />
                    <h4 className="city"> {cidade}</h4>
                  </div>
                  <div className="card-infos">
                    <h3> {nome}</h3>

                    <p> {descricao}</p>
                    <button>Marcar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>)}



        <Link className="linkbtn" to="/list"> Ir para todas as clínicas</Link>

        <Svgs />
      </div>



    </>

  );

}

export default HomeContent;
