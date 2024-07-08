import React from "react"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { Link } from "react-router-dom"
export default function Modifier_événement(props){
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

    function stocker_alerter(event){
        document.getElementById("alerter").nextElementSibling.innerHTML=""
        let element=event.target
        setAlerter(element.value)
        setRequest({...request,"alerter":element.value})
    }

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
            let response =await axios.post("http://127.0.0.1:8000/api/update_événement/"+props.id,request)
            if(response){
                window.location.pathname="/afficher_événement";
                }
        } catch(erreur){

        }
        
    }
    async function get_update(id){
        try{
            let response =await axios.post("http://127.0.0.1:8000/api/modifier_événement",{"id":id})
            setÉvénement_infos(response.data.événement)
            console.log(response.data)
        } catch{
        }
        
    }
    

        function modifier_événement(event,id){
            event.preventDefault()
            get_update(id)
        }

            
//-------------------partie commun-----------------------------------------------------------------------------------


async function get_response(){
    let response=await axios.get("http://127.0.0.1:8000/action_admin/get_all_application",request); 
     //.then((data)=>{return data.})
     //setévénements(response)
    if(response==true){
        console.log(response.data);
    }
}




function click(event){
    let element=event.target
    let previous=element.previousSibling
    previous.style.top="10px"
}
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
function stope_submit(event){
    event.preventDefault()
        if(description==""){
            document.getElementById("description").nextElementSibling.innerHTML="remplir le description"
        }
        if(application==""){
            document.getElementById("application_utilisé").nextElementSibling.innerHTML="remplir l'application"
        }
        if(alerter==""){
            document.getElementById("alerter").nextElementSibling.innerHTML="remplir l'une des option"
        }
    else{
        send_request()
    }
}
function stocker_application_utilisé(event){
    document.getElementById("application_utilisé").nextElementSibling.innerHTML=""
    let element=event.target
    setapplication(element.value)
    setRequest({...request,"application":element.value})
    
}


function stocker_description(event){
    document.getElementById("description").nextElementSibling.innerHTML=""
    let element=event.target
    setdescription(element.value)
    setRequest({...request,"description":element.value})
    
}

    return(
        <>
        <div className="container form_container  modifier_événement">
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
                <button className="btn border rounded-3" onClick={(event)=>{stope_submit(event)}}>Modifier</button>
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