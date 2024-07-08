import React from "react";
import { BsFacebook, BsInstagram, BsTwitterX, BsWhatsapp, BsYoutube } from "react-icons/bs";
export default function Footer(){
    return(
        <>
        <div className="container-fluid bg-black footer_container">
            <div className="icone_container">
                <span>Suivez-orange</span>
                <a href="https://api.whatsapp.com/send/?phone=212663121121&text=Bonjour&type=phone_number&app_absent=0"><BsWhatsapp className="icone"/></a>
                <a href="https://www.facebook.com/orange/?brand_redir=315483546255"><BsFacebook className="icone"/></a>
                <a href="https://www.instagram.com/orangemaroc/"><BsInstagram className="icone"/></a>
                <a href="https://twitter.com/orangemaroc"><BsTwitterX className="icone"/></a>
                <a href="https://www.youtube.com/orangemaroc"><BsYoutube className="icone"/></a>
            </div>
            <div className="zahir"><span>ZAHIR</span></div>
        </div>
        </>
    )
}