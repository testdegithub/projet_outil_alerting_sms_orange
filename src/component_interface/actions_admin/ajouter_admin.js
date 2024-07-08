import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export default function Ajouter_admin(){
    const [login,setLogin]=useState("");
    const [password,setPassword]=useState("");
    const [nom,setNom]=useState("");
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
    async function send_request(){
        try{
            let response =await axios.post("http://127.0.0.1:8000/api/ajouter_admin",request)
            window.location.pathname="/accueil"
            
        }catch{}
    }
    async function get_response(){
        
        if(await axios.get("http://127.0.0.1:8000/authentification",request).then((data)=>{return data.verified})==true){
            
        }
    }
    function stope_submit(event){
        event.preventDefault()
        console.log(request)
            if(nom==""){
                document.getElementById("nom").nextElementSibling.innerHTML="remplir le nom"
            }
            if(login==""){
                document.getElementById("email").nextElementSibling.innerHTML="remplir l'email"
            }
            if(password==""){
                document.getElementById("password").nextElementSibling.innerHTML="remplir le password"
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

    function stocker_nom(event){
        document.getElementById("nom").nextElementSibling.innerHTML=""
        let element=event.target
        setNom(element.value)
        setRequest({...request,"nom":element.value})
        
    }
    function stocker_password(event){
        document.getElementById("password").nextElementSibling.innerHTML=""
        let element=event.target
        setPassword(element.value)
        setRequest({...request,"password":element.value})
        
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
                    <img src="images/ajouter_admin.png" alt="" />
                </div>
                <div className="form">
                <form>
                
                <label>nom d'admin</label>
                <input type="nom" onClick={(event)=>{click(event)}} id="nom" onChange={(event)=>{stocker_nom(event)}} className="login"/>
                <span className="erreur_zone"></span>
                
                <label>Email d'admin</label>
                <input type="email" onClick={(event)=>{click(event)}} id="email" onChange={(event)=>{stocker_login(event)}} className="login"/>
                <span className="erreur_zone"></span>
                <label>Password d'admin</label>
                <input type="password" onClick={(event)=>{click(event)}} id="password" onChange={(event)=>{stocker_password(event)}} className="login"/>
                <span className="erreur_zone"></span>
                <input type="submit" value="submit" className="btn border rounded-3 submit" id="btn border rounded-3" onClick={(event)=>{stope_submit(event)}}/>
            </form>
                </div>
                <div className="visiter_orange">
                    <a href="https://www.orange.ma/" className="btn border rounded-3"> visiter orange</a>
                </div>
            </div>
        </>
    )
}