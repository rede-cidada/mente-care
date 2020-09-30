import React from "react";
import Svgs from '../../components/universalComponents/backgroundSvg/Svgs'
import "./list.css";
import logo2 from "./assets/logo2.jpg";
import logo3 from "./assets/logo3.jpg";
import logo1 from "./assets/logo1.png";


/* let titulo = [
    "Clínica viva+",
    "Mental Health",
    "Clínica Care life",
    "Dr. Carlos Nelson"
]
let descricao = [
    "Saúde mental para que você possa viver mais!",
    "A mente é algo complexo por isso nos lhe ajudamos a entendela.",
    "Cuidar da sua saúde mental é o nosso objetivo!",
    "DR. formando em psicologia pela UFPE, disponivel para lhe atender gratuitamente!"
] */


const List = () => (

    <div className="divMain">
        <Svgs />
<div className = "card" >
         <div className = "img" >
   
             <img src = { logo1 } alt ="logo"/>
             
    
         </div > 
   
      <div className = "cardInfo" >
    
         <h2> Clínica viva+ </h2> 
    
         <p> Saúde mental para que você possa viver mais! </p>  
    
      </div >

    </div>
    {/*  card */}



        <div className = "card" >
         <div className = "img" >
   
             <img src = { logo2 } alt ="logo"/>
    
         </div > 
   
      <div className = "cardInfo" >
    
         <h2> Dr. Carlos Nelson </h2> 
    
         <p> DR. formando em psicologia pela UFPE, disponivel para lhe atender gratuitamente! </p>  
    
      </div >

    </div>
    {/*  card */}



    <div className = "card" >
   
        <div className = "img" >
          <img src = { logo3 } alt ="logo"/>
        </div > 
     <div className = "cardInfo" >
    
     <h2> Clínica Care life </h2>  
        
        <p>
        Cuidar da sua saúde mental é o nosso objetivo!
        </p>

         </div>

    </div> 
    {/*  card  */}

    </div>  /* main */




);

export default List;