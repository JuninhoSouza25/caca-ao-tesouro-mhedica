import React from "react";
import {Link} from "react-router-dom";
import LogoMhedica from "../../components/logo-mhedica";
import LogoMhedTech from "../../components/logo-mhedtech/logomhedtech";
import bau from '../../assets/img/mapa-1.svg'
import './home.css';

export default function Home(){
    return (
        <div className="home">
            <div className="main animation-slide">
                <div className="main-content">
                    <LogoMhedica />
                    <h1>Caça ao Tesouro Mhédica</h1>
                    <h2>Você foi convocado para uma aventura!</h2>
                    <img className="img animation-grow" alt="Imagem Bau" src={bau}></img>
                    <div className="content">
                        <p>Se prepare, você vai participar de uma corrida secreta em busca de um tesouro enterrado no nosso prédio.</p>
                        <p>Você vai ter que desvendar pistas e seguir o caminho até o seu premio.</p>
                        <p>Como todo Baú de Tesouro, existe apenas um ganhador, então se apresse e siga os passos logo para não ser um marujo atrasado!</p>
                        <p>Ao clicar em "Ir à Caça" você receberá o primeiro desafio!</p>
                        <p>Boa sorte!</p>
                    </div>
                    <Link className="link-button animation-grow" to="/pergunta-1">Ir à Caça</Link>
                    <LogoMhedTech />
                </div>
            </div>
        </div>
    )
}