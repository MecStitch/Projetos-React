import React from "react";
import HomeTopo from '../home/HomeTopo/HomeTopo';
import Aproveite from "../home/Aproveite/Aproveite";
import BaixarDiv from "../home/Baixar/Baixar";
import Assista from "../home/Assista/Assista";
import Kids from "../home/Kids/Kids";
import Perguntas from "../home/Perguntas/Perguntas";
import Footer from "../home/Footer/Footer";


function Home(){
    return(
        <div className="container_home">
           <HomeTopo />
            <Aproveite />
            <BaixarDiv />
            <Assista />
            <Kids />
            <Perguntas />
            <Footer />

        </div>
    )
}

export default Home;