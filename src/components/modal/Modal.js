import React from "react";
import "./modal.css";
import Svgs from "../../components/universalComponents/backgroundSvg/Svgs";


const Modal = () => (
    
    <section className="content">

        <div calsss="box-titulo">
            <h1 className="modal-titulo">Titulo Modal</h1>     
        </div>

        <div className="box-filter">

            <div className="box-label">
             
                <label className="text-modal" for="ordenar">Ordenar por:</label>
            </div>

            <div className="box-filter-select">   

                <select class="select-inputs" name="filter" id="filter">                   
                    <option value="padrao">Padrão</option>   
                    <option value="maisProximo">Mais próximo</option>
                    <option value="maisProcurados">Mais procurados</option>
                    <option value="precoCrescente">Preço crescente</option>         
                    <option value="precooDecrescente">Preço decrescente</option>
                </select>               
            </div>

            <div className="box-input">
                <input className="input-submit" type="submit" value="Pesquisar" id="filter" />
            </div>
             
        </div>
        <Svgs/>  
    </section>
   
);

export default Modal;