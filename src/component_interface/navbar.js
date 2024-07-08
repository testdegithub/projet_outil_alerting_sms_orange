import React from "react";
import { useState } from "react";
import { FaUser, FaUserPlus } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
export default function Navbar(){

    function get_authentification_box(){
        if(!localStorage.getItem("authentifier")){
            return(
            <div className="conteneur_button_navbar">
                <a href="/"><FaUser/> connecter </a>
                <a href="inscription" className="" ><FaUserPlus/> S'inscrire</a>
            </div>)}}

    function get_navbar_links(){
        if(localStorage.getItem("authentifier")){
            return(
                <>
                            <div className="nav-item"><a href="/accueil" className="nav-link">Accueil </a></div>
                            <div className="nav-item"><a href="/profile" className="nav-link">Profile </a></div>
                            <div className="nav-item"><a href="https://www.orange.ma/" className="nav-link">support </a></div>
                </>
            )
        }
    }
    return(
                <nav className=" navbar fixed-top bg-dark">
                        <div className="navbar-header">
                            <a class="navbar-brand" href="#">
                                <img src="images/logo2.jpg" alt="Avatar Logo" class="rounded-pill logo"/> 
                            </a>
                        </div>
                        {get_navbar_links()}
                        {get_authentification_box()}
                </nav>
    );
}