import React from "react";
import "./App.css";


class Section extends React.Component{

render(){
  return(
    <section className="newsletter">
        <h3 className="subtitulo">Newsletter</h3>
            <p className="paragrafo">Receba nossas promoçoes por email</p>
                <form  className="formNews">
                    <input type="text" placeholder="Seu nome" className="inputName" />
                    <input type="email" placeholder="Seu e-mail" className="inputName" />
                    <button className="btnNews">Cadastrar</button>
                </form>
    </section>
  ); 
}
}

export default Section;