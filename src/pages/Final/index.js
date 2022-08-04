import React from "react";
import LogoMhedica from "../../components/logo-mhedica";
import LogoMhedTech from "../../components/logo-mhedtech/logomhedtech";
import bau from '../../assets/img/Mapa colorido.svg'

export default function Final(){

    return (
        <div className="home">
            <div className="main animation-slide">
                <div className="main-content">
                    <LogoMhedica />
                    <h1>Caça ao Tesouro Mhédica</h1>
                    <h2>Parabéns você chegou na ultima etapa da busca!</h2>
                    <img className="img animation-grow" alt="Imagem Bau" src={bau}></img>
                    <div className="content">
                        <p>Você percorreu todos os caminhos e chegou e agora vai saber aonde o tesouro se encontra!</p>
                        <p>Ao longo do caminho, você recebeu pistas nos locais visitados.</p>
                        <p>Duas delas formam o nome do setor aonde está o tesouro.</p>
                        <p>Junte as duas e diga no local para desenterra-lo!</p>
                    </div>
                    <LogoMhedTech />
                </div>
            </div>
        </div>
    )
}