import axios from "axios"
import React, { useEffect } from "react"
import { useState } from "react";
import Modifier_profile from "./modifier_profile";

export default function Afficher_profile(){
    const [user_authentifier,setuser_authentifier]=useState([]);
    const [afficher_profile,setafficher_profile]=useState("")

    useEffect(()=>{
        if(!localStorage.getItem("authentifier")){
            window.location.pathname="/"
        }
    },[])

    async function get_utilisateur_authentifier(){
        const id=window.localStorage.getItem("user")
        let user=await axios.get("http://127.0.0.1:8000/api/get_utilisateur_authentifier/"+id);
        setuser_authentifier(user.data.user)
        console.log(user.data.user)
    }

    function modifier_profile(){
        setafficher_profile(
                <>
                <Modifier_profile user={user_authentifier}/>
                </>
        )
    }
    function get_profile_informations(){
        setafficher_profile(()=>{
            return(
    <section className="container_cards">
        <div class="container card_container">
        <div class="card" >
            <div class="card-body">
                <div className="profile_title">
                    <h2 class="card-title">profile</h2>
                </div>
                <h5>Nom</h5>
                <p class="card-text">{user_authentifier.nom}</p>
                <h5>Numéro telephone</h5>
                <p class="card-text">{user_authentifier.numéro_téléphone}</p>
                <h5>Email</h5>
                <p class="card-text">{user_authentifier.email}</p>
                <button class="btn border rounded-3 border rounded-3" onClick={()=>{
                    modifier_profile()
                }}>Modifier</button>
            </div>
        </div>
        </div>
    </section>
            )
        })
    }
    useEffect(()=>{
        get_utilisateur_authentifier()
    },[])

    useEffect(()=>{
        get_profile_informations()
    },[user_authentifier])


    

    return(
        <>
        {afficher_profile}
        </>
    )
}