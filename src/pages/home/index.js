import React from "react";
import {Link} from "react-router-dom";
import './home.css';

export default function Home(){
    return (
        <div className="home">
            <div className="head">
                <h1>Home</h1>
                <h2>Aqui vai ficar a logo</h2>
            </div>
            <div className="main">
                <p>loren</p>
                <Link className="link-button" to="/pergunta-1">seguinte</Link>
            </div>
            <div className="footer">
                <h2>Logo Mheditech</h2>
            </div>
        </div>
    )
}