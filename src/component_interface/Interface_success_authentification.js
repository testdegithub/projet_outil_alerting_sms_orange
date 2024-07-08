import React from "react";
import { useEffect } from "react";
//import './succes.css';
export default function Interface_success_authentification(){
    useEffect(()=>{
        if(!localStorage.getItem("authentifier")){
            window.location.pathname="/"
        }
    },[])

    return(
        <>
        <style>
            
        </style>
            <section className="container_cards">
            <div class="container card_container">
                <div class="card" >
                    <img class="card-img-top" src="images/ajouter_admin.png" alt="ajouter admin image" />
                    <div class="card-body">
                        <h4 class="card-title">Ajouter admin</h4>
                        <p class="card-text">ajouter un nouveau admin pour vous aidez a gérer cette outil</p>
                        <a href="/ajouter_admin" class="btn border rounded-3 ">Ajouter</a>
                    </div>
                </div>
            </div>
            <div class="container card_container">
                <div class="card" >
                    <img class="card-img-top" src="images/ajouter_événement.png" alt="ajouter admin image" />
                    <div class="card-body">
                        <h4 class="card-title">Ajouter événement</h4>
                        <p class="card-text">ajouter un nouveau événement d'une applications</p>
                        <a href="/ajouter_événement" class="btn border rounded-3 ">Ajouter</a>
                    </div>
                </div>
            </div>
            <div class="container card_container">
                <div class="card" >
                    <img class="card-img-top" src="images/afficher_événements.png" alt="ajouter admin image" />
                    <div class="card-body">
                        <h4 class="card-title">Afficher événements</h4>
                        <p class="card-text">afficher tous les événements par applications</p>
                        <a href="/afficher_événement" class="btn border rounded-3 ">Afficher</a>
                    </div>
                </div>
            </div>
            <div class="container card_container">
                <div class="card" >
                    <img class="card-img-top" src="images/ajouter_application.png" alt="ajouter admin image" />
                    <div class="card-body">
                        <h4 class="card-title">Ajouter application</h4>
                        <p class="card-text">ajouter une application orange contient des événements</p>
                        <a href="/ajouter_application" class="btn border rounded-3 ">Ajouter</a>
                    </div>
                </div>
            </div>
            <div class="container card_container">
                <div class="card" >
                    <img class="card-img-top" src="images/afficher_applications.png" alt="ajouter admin image" />
                    <div class="card-body">
                        <h4 class="card-title">Afficher applications</h4>
                        <p class="card-text">afficher tous les applications orange</p>
                        <a href="/afficher_applications" class="btn border rounded-3 ">Afficher</a>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}