import React from "react"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Modifier_application from "./modifier_application"
export default function Afficher_applications(){
    const [liste_applications,setListe_applications] =useState([])
    const [afficher_application,setafficher_application]=useState()

    useEffect(()=>{
        if(!localStorage.getItem("authentifier")){
            window.location.pathname="/"
        }
    },[])
    
    async function get_application() {
        try {
            let response = await axios.get("http://127.0.0.1:8000/api/get_all_applications");
            console.log(response.data);
            setListe_applications(response.data.application)
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des applications :', error);
        }
    }
    
    
    useEffect(() => {
        get_application();
    }, []);
    function modifier_application(id){
        setafficher_application(
            <>
            <Modifier_application id={id}/>
            </>)
    }
    useEffect(() =>{
        setafficher_application(
            <div className="d-flex afficher_infos_conteneur">     
            {liste_applications.map((application)=>{
            return(
        <div class="container card_container modifier_container">
        <div class="card card_modifier" >
            <div class="card-body">
                <h4 class="card-title">application {application.id}</h4>
                <div class="card-title">Ajouter par : <span className="admin">admin {application.admin}</span></div>
                <h4 class="card-title">nom:  {application.nom_application}</h4>
                <button onClick={()=>{modifier_application(application.id)}} className={"btn border rounded-3 border rounded-3"} >Modifier</button>
            </div>
        </div>
    </div>)})}
    </div>  )
    },[liste_applications])




            
//-------------------partie commun-----------------------------------------------------------------------------------





//async function send_request(){
//    try{
//        let response =await axios.post("http://127.0.0.1:8000/api/update_application",request)
//        console.log(response.data)
//        
//    }catch{}
//}
//async function get_response(){
//    
//    if(await axios.get("http://127.0.0.1:8000/api/modifier_application",request).then((data)=>{return data.verified})==true){
//        window.location.pathname="/a"
//    }
//}






    return(
        <>

            {afficher_application}

        </>
    )
}