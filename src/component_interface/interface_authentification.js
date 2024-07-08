import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
export default function Interface_authentification(props){
    const [login,setLogin]=useState("");
    const [password,setPassword]=useState("");
    const [nom,setNom]=useState("");
    const [numero_télephone,setnumero_télephone]=useState("");
    const [request,setRequest] = useState({})
    const [user_form,set_user_form]=useState("")

    useEffect(()=>{
        if(localStorage.getItem("authentifier")){
            window.location.pathname="/accueil"
        }
    },[])
    function click(event){
        let element=event.target
        let previous=element.previousSibling
        previous.style.top="10px"
    }
    async function send_request(){
        try{
            let response =await axios.post("http://127.0.0.1:8000/api/authentification/login",request)
            if(response.data.status){
                window.location.pathname="accueil"
                localStorage.setItem("authentifier",response.data.status)
                localStorage.setItem("user",response.data.user)
            }else{
                window.location.pathname="/"
            }
        }catch{}
    }
    async function get_response(){
        
        let response=await axios.get("http://127.0.0.1:8000/authentification/login",request)
        console.log(response)
    }
    function stope_submit(event){
        event.preventDefault()
        console.log(request)
        if(request.nom==""){
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
        }
        else if(login=="" | password==""){
            console.log("aaa")
            if(login==""){
                document.getElementById("email").nextElementSibling.innerHTML="remplir l'email"
            }
            if(password==""){
                document.getElementById("password").nextElementSibling.innerHTML="remplir le password"
            }
        }
        
        else{
            send_request()
            //get_response()
        }
    }
    function stocker_login(event){
        document.getElementById("email").nextElementSibling.innerHTML=""
        let element=event.target
        setLogin(element.value)
        setRequest({...request,"email":element.value})
        
    }

    function stocker_password(event){
        document.getElementById("password").nextElementSibling.innerHTML=""
        let element=event.target
        setPassword(element.value)
        setRequest({...request,"password":element.value})
        
    }
    return(
        <>
            <div className="container form_container">
                <div className="image_sms">
                    <img src="images/background-site3.png" alt="" />
                </div>
                <div className="form">
                <form>
                <label>Email</label>
                <input type="email" onClick={(event)=>{click(event)}} id="email" onChange={(event)=>{stocker_login(event)}} className="login"/>
                <span className="erreur_zone"></span>
                <label>Password</label>
                <input type="password" onClick={(event)=>{click(event)}} id="password" onChange={(event)=>{stocker_password(event)}} className="login"/>
                <span className="erreur_zone"></span>
                <input type="submit" value="login" className="btn btn-login border rounded-3 submit" id="btn border rounded-3" onClick={(event)=>{stope_submit(event)}}/>
            </form>
                </div>
                <div className="visiter_orange">
                    <a href="https://www.orange.ma/" className="btn border rounded-3"> visiter orange</a>
                </div>
            </div>
        </>
    )
}
