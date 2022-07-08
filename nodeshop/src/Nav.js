import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGlobeEurope,faMagic, faBucket } from "@fortawesome/free-solid-svg-icons";


class Nav extends React.Component{

render(){
  return(
    <nav className='menu'>
        <ul>
            <li className='listMenu'><a href="#Home">Home</a></li>
            <li className='listMenu'><a href="#Produtos">Produtos</a></li>
            <li className='listMenu'><a href="#Servicos">Serviços</a></li>
            <li className='listMenu'><a href="#Contato">Contato</a></li>
        </ul>
        <div className="social-icons">
            <a href="" className="btn-linkedin"><FontAwesomeIcon icon={faGlobeEurope} /></a>
            <a href="" className="btn-github"><FontAwesomeIcon icon={faMagic} /></a>
            <a href="" className="btn-google"><FontAwesomeIcon icon={faBucket} /></a>
        </div>
    </nav>
  ); 
}
}

export default Nav;