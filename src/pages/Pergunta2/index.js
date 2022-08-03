import React from "react";
import { Link } from "react-router-dom";
import '../Home/home.css'


export default function Pergunta2(){
    return (
        <div className="home">
            <div className="head">
                <h1>Pergunta 2</h1>
            </div>
            <div className="main">
                <form>
                    <label>
                        Pergunta
                        <input type="text"></input>
                    </label>
                </form>
                <Link className="link-button" to="/pergunta-3">Proxima Pergunta</Link>
            </div>
            <div className="footer">
                <h2>Logo Mheditech</h2>
            </div>
        </div>
    )
}