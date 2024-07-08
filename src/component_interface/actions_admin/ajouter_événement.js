import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export default function Ajouter_événement(){
    const [description,setdescription]=useState("");
    const [application,setapplication]=useState("");
    const [application_utilisé,setApplication_utilisé]=useState("");
    const [liste_applications,setListe_application]=useState([]);
    const [alerter,setAlerter]=useState("");
    const [request,setRequest] = useState({})

    useEffect(()=>{
        if(!localStorage.getItem("authentifier")){
            window.location.pathname="/"
        }
    },[])
    
    function click(event){
        let element=event.target
        let previous=element.previousSibling
        previous.style.top="10px"
    }
    //async function send_request(){
    //    try{
    //        let response =await axios.post("http://127.0.0.1:8000/api/ajouter_événement",request)
    //        console.log(response.data)
    //        
    //    }catch{}
    //}
    //async function get_response(){
    //    
    //    if(await axios.get("http://127.0.0.1:8000/authentification",request).then((data)=>{return data.verified})==true){
    //        window.location.pathname="/a"
    //    }
    //}
    async function get_application() {
        try {
            let response = await axios.get("http://127.0.0.1:8000/api/get_all_applications");
            console.log(response.data);
            setListe_application(response.data.application)
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des applications :', error);
        }
    }
    
    
    useEffect(() => {
        get_application();
    }, []);
    
        
    async function send_request(){
        try{
            let response =await axios.post("http://127.0.0.1:8000/api/ajouter_événement",request)
            console.log(response.data)
                window.location.pathname="/afficher_événement";
        } catch{
            //document.getElementById("api_erreur").innerHTML="ce email est dèja utilisé"
        }
        
    }
    function stope_submit(event){
        event.preventDefault()
        console.log(request)
            if(description==""){
                document.getElementById("description").nextElementSibling.innerHTML="remplir le description"
            }
            if(application_utilisé==""){
                document.getElementById("application_utilisé").nextElementSibling.innerHTML="remplir l'application"
            }
            if(alerter==""){
                document.getElementById("alerter").nextElementSibling.innerHTML="remplir l'une des option"
            }
        else{
            send_request()
        }
    }



    function stocker_description(event){
        document.getElementById("description").nextElementSibling.innerHTML=""
        let element=event.target
        setdescription(element.value)
        setRequest({...request,"description":element.value})
        
    }
    function stocker_application_utilisé(event){
        document.getElementById("application_utilisé").nextElementSibling.innerHTML=""
        let element=event.target
        setApplication_utilisé(element.value)
        setRequest({...request,"application":element.value})
    }
    function stocker_alerter(event){
        document.getElementById("alerter").nextElementSibling.innerHTML=""
        let element=event.target
        setAlerter(element.value)
        setRequest({...request,"alerter":element.value})
    }
    //function onload_function(){
    //    let onload_event = document.getElementById("onload_page")
    //    onload_event.style.display="none"
    //}
    //window.onload=onload_function()
    return(
        <>
            <div className="container form_container admin_action">
                <div className="image_sms">
                    <img src="images/ajouter_événement.png" alt="" />
                </div>
                <div className="form">
                <form>
                <label>description d'événement</label>
                <input type="description" onClick={(event)=>{click(event)}} id="description" onChange={(event)=>{stocker_description(event)}} className="login"/>
                <span className="erreur_zone"></span>
                
                <label>application d'événement</label>
                <select id="application_utilisé" onChange={(event)=>{stocker_application_utilisé(event)}} >
                        <option></option>
                        {
                        liste_applications.map((application)=>{
                        return(
                            <option value={application.id}>
                                {application.nom_application}
                            </option>
                            )
                        })}
                </select>
                <span className="erreur_zone"></span>
                <div className="alerter" id="alerter">
                    <h3>alerter</h3>
                <input type="radio" id="" name="pour_alerter" value="oui" className="" onClick={(event)=>{stocker_alerter(event)}}/>
                <label>oui</label>
                <input type="radio" id="" name="pour_alerter" value="non" className="" onClick={(event)=>{stocker_alerter(event)}}/>
                <label>non</label>
                </div>
                <span className="erreur_zone"></span>
                
                <div className="conteneur_buttons">
                    <button className="btn border rounded-3" onClick={(event)=>{stope_submit(event)}}>Ajouter</button>
                </div>
            </form>
                </div>
                <div className="visiter_orange">
                    <a href="https://www.orange.ma/" className="btn border rounded-3"> visiter orange</a>
                </div>
            </div>
        </>
    )
}