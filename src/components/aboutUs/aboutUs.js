import React from "react";
import Svgs from "../universalComponents/backgroundSvg/Svgs";
import "./aboutUs.css";
import alison from "./assets/am.png";
import luciana from "./assets/lc.png";
import markus from "./assets/md.jpeg";
import rayani from "./assets/rc.jpeg";
import wendell from "./assets/wm.jpg"
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg"
const AboutUs = () => (



    <div className="aboutUs">
        <div className="aboutContent">

            <div className="aboutTitle">
                <h1>Quem somos?</h1>
            </div>


            <article>
                <h2 className="txt">
                    Somos a Mente Care e nosso objetivo é proporcionar as pessoas informações
                    e indicações sobre clínicas de psicologia ou psicólogos(as)
                    que ofereçam consultas gratuitas ou por um valor simbólico,
                    nos lugares mais próximos à elas.
            </h2>
                <p className="txt">
                    Você já parou para pensar em como é difícil encontrar ajuda especializada?
            </p>
                <p className="txt">
                    Primeiro você revira o livro do convênio ou busca na internet em busca de especialistas e clínicas.
                    Depois faz várias ligações e, se tudo der certo, consegue um horário para a mesma semana.
            </p>
                <p className="txt">
                    Mas não precisa ser assim!
            <span className="txtBold"> Por isso buscamos facilitar o acesso a ajuda para pessoas que precisan de ajuda psicologica o mais rapido possível.</span>
                </p>

            </article>



        </div>



        <h2 className="titleTeam">Nosso Time</h2>
        <div className="team">
            <div className="teamInfo">
                <img className="img" src={alison} alt="alison Melo" />
                <h2>Alison Melo</h2>
                <h3>Dev Front-End | Designer Auxiliar </h3>
                <p>Design gráfico e estudante de Analise e desenvolvimento de sistemas.</p>
                <ul className="links">

                    <li><a href="https://www.linkedin.com/in/alisonmtmelo/" target="_blank"><img src={linkedin} /></a></li>
                    <li><a href="https://github.com/alisonmelo" target="_blank"><img src={github} /></a></li>
                </ul>

            </div>
            <div className="teamInfo">
                <img className="img" src={luciana} alt="luciana candido" />
                <h2>Luciana Cândido</h2>
                <h3>Dev Front-End</h3>
                <p>Turismóloga e entusiasta na área de Programação.
             </p>
                <ul className="links">
                    <li><a href="https://www.linkedin.com/in/lucianascandido/" target="_blank"><img src={linkedin} /></a></li>
                    <li><a href="https://github.com/lucianacscandido" target="_blank"><img src={github} /></a></li>

                </ul>
            </div>
            <div className="teamInfo">
                <img className="img" src={markus} alt="Markus Dennys" />
                <h2>Markus Dennys</h2>
                <h3>Dev Front-End | UI Designer</h3>
                <p>jovem audaz amante de tecnologia</p>
                <ul className="links">
                    <li><a href="https://www.linkedin.com/in/markus-dennys-abb8551ab/" target="_blank"><img src={linkedin} /></a></li>
                    <li><a href="https://github.com/markDennys" target="_blank"><img src={github} /></a></li>

                </ul>

            </div>
            <div className="teamInfo">
                <img className="img" src={rayani} alt="Rayani Carolaine" />
                <h2>Rayani Carolaine</h2>
                <h3>Dev Front-End</h3>
                <p>jovem audaz amante de tecnologia</p>
                <ul className="links">

                    <li><a href="https://www.linkedin.com/in/rayani-freitas-a118541ab/" target="_blank"><img src={linkedin} /></a></li>
                    <li><a href="https://github.com/freitasrayani" target="_blank"><img src={github} /></a></li>
                </ul>

            </div>
            <div className="teamInfo">
                <img className="img" src={wendell} alt="Wendell Matheus" />
                <h2>Wendell Matheus</h2>
                <h3>Dev Front-End</h3>
                <p>jovem audaz amante de tecnologia</p>
                <ul className="links">

                    <li><a href="https://www.linkedin.com/in/wendell-matheus-8018721ab/" target="_blank"><img src={linkedin} /></a></li>
                    <li><a href="https://github.com/WendellMatheus" target="_blank"><img src={github} /></a></li>
                </ul>
            </div>

        </div>

        <Svgs />
    </div>
);

export default AboutUs;