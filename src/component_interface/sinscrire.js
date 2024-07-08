import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
export default function Interface_inscription(){
    const [login,setLogin]=useState("");
    const [password,setPassword]=useState("");
    const [nom,setNom]=useState("");
    const [numero_télephone,setnumero_télephone]=useState("");
    const [application_utilisé,setApplication_utilisé]=useState("");
    const [liste_applications,setListe_application]=useState([]);
    const [request,setRequest] = useState({})

    function click(event){
        let element=event.target
        let previous=element.previousSibling
        previous.style.top="10px"
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
        
            let response =await axios.post("http://127.0.0.1:8000/api/authentification/inscription",request)
            console.log(response.data)
            if(response){
                localStorage.setItem("inscription_succes",true)
                window.location.pathname="/interface_inscription_succes";}
        
    }
    async function get_response(){
        
        let response =await axios.get("http://127.0.0.1:8000/api/authentification/inscription")
        console.log(response.data)
        }
    
    function stope_submit(event){
        event.preventDefault()
        let test =document.getElementById("application_utiliser")
        console.log(request)
            if(nom==""){
                document.getElementById("nom").nextElementSibling.innerHTML="remplir le nom"
            }
            if(numero_télephone==""){
                document.getElementById("numero_télephone").nextElementSibling.innerHTML="remplir le numero de télephone"
            }
            if(login==""){
                document.getElementById("email").nextElementSibling.innerHTML="remplir l'email"
            }
            if(password==""){
                document.getElementById("password").nextElementSibling.innerHTML="remplir le password"
            }
            if(application_utilisé==""){
                document.getElementById("application_utilisé").nextElementSibling.innerHTML="remplir le application"
            }
        
        else{
            send_request()
        }
    }
    function stocker_login(event){
        document.getElementById("email").nextElementSibling.innerHTML=""
        let element=event.target
        setLogin(element.value)
        setRequest({...request,"email":element.value})
        
    }


    function stocker_application_utilisé(event){
        document.getElementById("application_utilisé").nextElementSibling.innerHTML=""
        let element=event.target
        setApplication_utilisé(element.value)
        setRequest({...request,"application":element.value})
        
    }


    function stocker_nom(event){
        document.getElementById("nom").nextElementSibling.innerHTML=""
        let element=event.target
        setNom(element.value)
        setRequest({...request,"nom":element.value})
        
    }
    function stocker_numero_télephone(event){
        document.getElementById("numero_télephone").nextElementSibling.innerHTML=""
        let element=event.target
        setnumero_télephone(element.value)
        setRequest({...request,"numéro_téléphone":element.value})
        
    }
    function stocker_password(event){
        document.getElementById("password").nextElementSibling.innerHTML=""
        let element=event.target
        setPassword(element.value)
        setRequest({...request,"password":element.value})
        
    }
    return(
        <>
            <div className="container form_container form_container_sinscrire">
                <div className="image_sms">
                    <img src="images/background-site3.png" alt="" />
                </div>
                <div className="form">
                <form>
                    <label>nom</label>
                    <input type="text" onClick={(event)=>{click(event)}} id="nom" onChange={(event)=>{stocker_nom(event)}} className="login"/>
                    <span className="erreur_zone"></span>
                    <label>numero_télephone</label>
                    <input type="number" onClick={(event)=>{click(event)}} id="numero_télephone" onChange={(event)=>{stocker_numero_télephone(event)}} className="login"/>
                    <span className="erreur_zone"></span>
                    <label>Email</label>
                    <input type="email" onClick={(event)=>{click(event)}} id="email" onChange={(event)=>{stocker_login(event)}} className="login"/>
                    <span className="erreur_zone"></span>
                    <label>Password</label>
                    <input type="password" onClick={(event)=>{click(event)}} id="password" onChange={(event)=>{stocker_password(event)}} className="login"/>
                    <span className="erreur_zone"></span>
                    <label>application utiliser</label>
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
                        <button className="btn border rounded-3 submit" id="btn border rounded-3" onClick={(event)=>{stope_submit(event)}}>submit</button>
                    </form>
                    </div>
                    <div className="api_erreur" id="api_erreur">
                        
                    </div>
                    <div className="visiter_orange">
                        <a href="https://www.orange.ma/" className="btn border rounded-3"> visiter orange</a>
                    </div>
                </div>
        </>
    )
}
