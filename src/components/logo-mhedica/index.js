import React from "react";
import logo from '../../assets/img/logomhedica.png'
import './logomhedica.css'

export default function LogoMhedica(){
    return(
        <div>
            <img className="logo-mhedica" src={logo} alt="Logo Mhedica" />
        </div>
    )
}