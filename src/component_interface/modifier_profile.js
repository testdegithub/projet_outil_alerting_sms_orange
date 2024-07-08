import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export default function Modifier_profile(props){
    const [password,setPassword]=useState("");
    const [nom,setNom]=useState("");
    const [numero_télephone,setnumero_télephone]=useState("");
    const [request,setRequest] = useState({})

    function click(event){
        let element=event.target
        let previous=element.previousSibling
        previous.style.top="10px"
    }

    async function send_request(){
            let id=window.localStorage.getItem("user")
            let response =await axios.post("http://127.0.0.1:8000/api/authentification/modifier_profile/"+id,request)
            console.log(response.data)
            window.location.pathname="/profile";
    }

    function stope_submit(event){
        event.preventDefault()
        console.log(request)
            if(nom==""){
                document.getElementById("nom").nextElementSibling.innerHTML="remplir le nom"
            }
            if(numero_télephone==""){
                document.getElementById("numero_télephone").nextElementSibling.innerHTML="remplir le numéro de télephone"
            }
            if(password==""){
                document.getElementById("password").nextElementSibling.innerHTML="remplir le nouveau password"
            }
        
        else{
            send_request()
        }
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
                <form className="modifier_info">
                    <label>nom</label>
                    <input type="text" id="nom" onChange={(event)=>{stocker_nom(event)}} className="login"/>
                    <span className="erreur_zone"></span>
                    <label>numero_télephone</label>
                    <input type="number" id="numero_télephone" onChange={(event)=>{stocker_numero_télephone(event)}} className="login"/>
                    <span className="erreur_zone"></span><span className="erreur_zone"></span>
                    <label>Nouveau Password</label>
                    <input type="password" id="password" onChange={(event)=>{stocker_password(event)}} className="login"/>
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
    )}