import { useState,useEffect } from "react";
import axios from "axios";
export default function Modifier_application(props){
    const [nom_application,setnom_application]=useState("");
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
            let response =await axios.post("http://127.0.0.1:8000/api/modifier_application/"+props.id,request)
            if(response){
                window.location.pathname="/afficher_applications"
            }
            
        }catch{}
    }
    function stope_submit(event){
        event.preventDefault()
            if(nom_application==""){
                document.getElementById("nom_application").nextElementSibling.innerHTML="remplir le nom d'application"
            }
        else{
            send_request()
        }
    }

    function stocker_nom_application(event){
        document.getElementById("nom_application").nextElementSibling.innerHTML=""
        let element=event.target
        setnom_application(element.value)
        setRequest({...request,"nom_application":element.value})
        
    }

    return(
        <>
            <div className="container form_container admin_action">
                <div className="image_sms">
                    <img src="images/ajouter_application.png" alt="" />
                </div>
                <div className="form">
                <form>
                    <div className="ajouter_application">
                        <label>nom d'application</label>
                        <input type="text" onClick={(event)=>{click(event)}} id="nom_application" onChange={(event)=>{stocker_nom_application(event)}} className="login"/>
                        <span className="erreur_zone"></span>
                    </div>
                    <input type="submit" value="Modifier" className="btn border rounded-3 submit" id="btn border rounded-3" onClick={(event)=>{stope_submit(event)}}/>
                </form>
                </div>
                <div className="visiter_orange">
                    <a href="https://www.orange.ma/" className="btn"> visiter orange</a>
                </div>
            </div>
        </>
    )
}