import React, {useState} from "react";
import { Link } from "react-router-dom";
import Errado from "../../components/errado/errado";
import LogoMhedica from "../../components/logo-mhedica";
import LogoMhedTech from "../../components/logo-mhedtech/logomhedtech";
import mapa from "../../assets/img/mapa-3.svg";
import '../Home/home.css'


export default function Pergunta2(){
    const [pista1, setPista1] = useState('');
    const [certo, setCerto] = useState(false);
    const [errado, setErrado] = useState(false);
    const [form, setForm] = useState(true);
    const resp1 = "mhed";

    function handlePista1(e) {
        e.preventDefault()
        console.log(pista1)
        if (pista1.toLocaleLowerCase().trim() === resp1){
            setCerto(true)
            setErrado(false)
            setForm(false)
        }else{
            setErrado(true)
        }
    }
    return (
        <div className="home">
            <div className="main animation-slide">
                <div className="main-content">
                    <LogoMhedica />
                    <h1>Pista 2</h1>
                    <h2>Caça ao QR-Code</h2>
                    {form && (
                        <form>
                            <label>Leia o QR-Code para descobrir a senha e use-a para desbloquear a proxima pista!</label>
                            <input className="input-text" type="text" placeholder="Responda aqui... " name="pista1" value={pista1} onChange={(e)=>setPista1(e.target.value)}></input>
                            <button className="link-button" onClick={handlePista1}>Responder</button>
                        </form>
                    )}
                    {certo && (
                        <div className="spam-resp animation-grow">
                            <h2>Certa resposta!</h2>
                            <img className="img-mapa" src={mapa} alt="mapa"></img>
                            <p>A próxima pista se encontra atrás da porta da sala de vendas.</p>
                            <Link className="link-button" to="/pergunta-3">Proxima pergunta</Link>
                        </div>
                        
                    )}
                    {errado && (
                        <Errado />
                    )}
                    <LogoMhedTech />
                </div>
            </div>
        </div>
    )
}