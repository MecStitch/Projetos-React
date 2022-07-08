import React from "react";
import "./App.css";
import loja from './IMGN/loja.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope , faMessage} from "@fortawesome/free-solid-svg-icons";

class Main extends React.Component{

render(){
  return(
    <main className="principal">
        <article className="sobre">
            <h2>Sobre nós</h2>
            <img src={loja} alt="Imagem de uma loja de informatica com tres pessoas, sendo dois homem e uma mulher" />

            <p>A NODESHOP, também conhecida como a loja do ALUNO do OBAMA , tem por finalidade fornecer os melhores produtos de tecnologia para programadores, gamers, streamers, para o seu home-office e entusiastas do mundo da tecnologia.</p>
            <br/>
            <p>Nossa missão é levar TECNOLOGIA e ACESSIBILIDADE para todos em todas as regiões de norte a sul, para que isso aconteça estamos no mundo inteiro.</p>
            <br/>
            <p>Em busca da velocidade e qualidade temos a NODESHOP EXPRESS&copy; , para que seu produto chegue com segurança e no tempo pedido, tudo para nosso cliente sinta-se bem ao comprar conosco.</p>
            <br/>
            <p>Levamos nossa missão muito a serio, com o seguinte modo de pensar: "Servimos bem para servir sempre", por isso nos dedicamos desde o site até o transporte de nossos produtos pois também acreditamos que cada item vendido leva um pedaço de nós. </p>
        </article>
        <aside class="onde-estamos">
            <h2>Onde estamos</h2>
            <p>Rua Tito N54 -Vila Romana-São Paulo-SP-Brasil</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.52748707274!2d-39.28678145023931!3d-14.795624603070642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x739aaf0cc0db597%3A0x9dfa10026b580036!2sAv.+Juc%C3%A1+Le%C3%A3o+-+Centro+Comercial%2C+Itabuna+-+BA!5e0!3m2!1spt-BR!2sbr!4v1449945134287%22%3E"></iframe>

            <h2>Contatos</h2>
            <ul>
                <li><FontAwesomeIcon icon={faPhone}/> (11)95735-4921</li>
                <li><FontAwesomeIcon icon={faMessage}/> (11)95735-4921</li>
                <li><FontAwesomeIcon icon={faEnvelope}/> Luccae.macedo@gmail.com</li>
            </ul>
            
        </aside>
    </main>
  ); 
}
}

export default Main;