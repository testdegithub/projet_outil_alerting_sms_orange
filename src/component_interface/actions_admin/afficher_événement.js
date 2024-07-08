import React from "react"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Modifier_événement from "./modifier_événement"
export default function Afficher_événements(){
    const [request,setRequest]=useState()
    const [événements,setévénements]=useState()
    const [description,setdescription]=useState("");
    const [application,setapplication]=useState("");
    const [liste_événements,setListe_événements] =useState([])
    const [afficher_événement,setafficher_événement]=useState()
    const [liste_applications,setListe_application]=useState([]);
    const [événement_infos,setÉvénement_infos] =useState({})
    const [alerter,setAlerter]=useState("");


    useEffect(()=>{
        if(!localStorage.getItem("authentifier")){
            window.location.pathname="/"
        }
    },[])



    async function get_événements() {
        try {
            let response = await axios.get("http://127.0.0.1:8000/api/afficher_événements");
            setListe_événements(response.data.événements)
            console.log(response.data.événements)

        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des événements :', error);
        }
    }
    
    
    useEffect(() => {
        get_événements();
    }, []);
    function modifier_événement(id){
        setafficher_événement(
            <>
                <Modifier_événement id={id}/>
            </>,[événement_infos])
    }
    async function supprimer_événement(id){
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/supprimer_événement/"+id);
            if(response){
                window.location.pathname="/afficher_événement";
            }

        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des événements :', error);
        }
    }

    useEffect(() =>{
        setafficher_événement(
            <div className="d-flex">     
            {liste_événements.map((événement)=>{
            return(
        <div class="container card_container modifier_container">
        <div class="card card_modifier" >
            <div class="card-body">
                <h4 class="card-title">Événement {événement.id}</h4>
                <div class="card-title">Ajouter par : <span className="admin">{événement.admin}</span></div>
                <h4>Description</h4>
                <p class="card-text">{événement.description}</p>
                <button onClick={()=>{modifier_événement(événement.id)}} className={"btn border rounded-3 border rounded-3/"} >Modifier</button>
                <button onClick={()=>{supprimer_événement(événement.id)}} className={"btn border rounded-3 border rounded-3"} >Supprimer</button>
            </div>
        </div>
    </div>)})}
    </div>  )
    },[liste_événements])




            
//-------------------partie commun-----------------------------------------------------------------------------------





//async function send_request(){
//    try{
//        let response =await axios.post("http://127.0.0.1:8000/api/update_événement",request)
//        console.log(response.data)
//        
//    }catch{}
//}
//async function get_response(){
//    
//    if(await axios.get("http://127.0.0.1:8000/api/modifier_événement",request).then((data)=>{return data.verified})==true){
//        window.location.pathname="/a"
//    }
//}






    return(
        <>

            {afficher_événement}

        </>
    )
}