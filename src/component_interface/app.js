import React from 'react';
import { useState,useEffect } from 'react';
import Navbar from './navbar';
import axios from 'axios';
import Cookies from 'js-cookie';
import Interface_authentification from './interface_authentification';
import Interface_success_authentification from './Interface_success_authentification';
import './style.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Footer from './footer';
import Ajouter_admin from './actions_admin/ajouter_admin';
import Ajouter_événement from './actions_admin/ajouter_événement';
import Ajouter_application from './actions_admin/ajouter_application';
import Afficher_événements from './actions_admin/afficher_événement';
import Afficher_profile from './user_profile';
import Afficher_applications from './actions_admin/afficher_applications';
import Interface_inscription from './sinscrire';
import Modifier_événement from './actions_admin/modifier_événement';
import Interface_inscription_succes from './interface_inscription_succes';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8000';

export default function App(){
    const [load_event,set_load_event]=useState("")
    const [utilisateur_authentifier,setutilisateur_authentifier]=useState("")
function load_event_function(){
    return(
        <div className="conteneur_onload_page">
        <div className='onload_page' id="onload_page">
            <img src="images/orange_logo.jpg" alt="orange" />
        </div>
        </div>
    )
}
useEffect(()=>{
    if(localStorage.getItem("authentifier")){
        window.setTimeout(()=>{
            localStorage.removeItem("authentifier")
        },86400000)
    }
    set_load_event(    
        load_event_function()
    )
},[])
useEffect(()=>{
    window.setTimeout(()=>{
        set_load_event("")
    },3000)
},[load_event])

/*
    async function get_user() {
        try {
            let response = await axios.get("http://127.0.0.1:8000/api/get_user");
            console.log(response.data);
            setListe_user(response.data.user)
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des user :', error);
        }
    }
    
    
    useEffect(() => {
        get_application();
    }, []);
*/

async function get_utilisateur_authentifier() {
    try {
        let response = await axios.get("http://127.0.0.1:8000/api/get_utilisateur_authentifier/"+localStorage.getItem("user"));
        console.log(response.data);
        setutilisateur_authentifier(response.data.user)
        
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'authentification :', error);
    }
}


/*useEffect(()=>{
    if(!localStorage.getItem("authentifier")){
        window.location.pathname="/"
    }
},[])*/
    function get_authentification_routes(){
        if(!localStorage.getItem("authentifier")){
        return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Interface_authentification />}/>
            <Route path='/inscription' element={<Interface_inscription/>}/>
        </Routes>
    </BrowserRouter>)
    }}

    function get_interface_inscription_succes(){
        if(localStorage.getItem("inscription_succes")){
            return(
        <BrowserRouter>
            <Routes>
                <Route path='/interface_inscription_succes' element={<Interface_inscription_succes/>}/>
            </Routes>
        </BrowserRouter>)
        }
    }


function get_admin_action_routes(){
    //est ce que l'utilisateur authentifier
    //est ce que l'utilisateur c'est un admin  check_authentification==true
    if(localStorage.getItem("authentifier")){
        return(
            <BrowserRouter>
                <Routes> 
                    <Route path='/' element={<Interface_authentification />}/>
                    <Route path='/profile' element={<Afficher_profile/>}/>
                    <Route path='/accueil' element={<Interface_success_authentification/>}/>
                    <Route path='/ajouter_admin' element={<Ajouter_admin/>}/>
                    <Route path='/ajouter_événement' element={<Ajouter_événement/>}/>
                    <Route path='/ajouter_application' element={<Ajouter_application/>}/>
                    <Route path='/afficher_événement' element={<Afficher_événements/>}/>
                    <Route path='/afficher_applications' element={<Afficher_applications/>}/>
                </Routes>
            </BrowserRouter> 
        )
    }


}
return(
    <>
    {load_event}
    <Navbar/>
    {get_authentification_routes()}
    {get_admin_action_routes()}
    {get_interface_inscription_succes()}
    <Footer/>
    </>

    
);
/* <BrowserRouter>
        <Routes>
        <Route path='/a' element=/>
        </Routes>
    </BrowserRouter> */ 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))


}