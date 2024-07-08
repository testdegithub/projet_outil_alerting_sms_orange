<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\applications;
use App\Models\événements;
use App\Models\utilisateurs;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Twilio\Rest\Client;
class AdminActionsController extends Controller
{
public function ajouter_admin(Request $request){
    utilisateurs::create([
        "nom"=>$request->nom,
        "numéro_téléphone"=>"null",
        "email"=>$request->email,
        'password' => Hash::make($request->password),
        'type_utilisateur' => 'admin',
        "id_application"=>11
    ]);

    return response()->json([
        "status"=>true
    ]);
}
public function get_all_applications(){
    $applications=applications::all();
return response()->json([
    "status"=>true,
    "application"=>$applications
]);

}


public function ajouter_événement(Request $request){
    événements::create([
    "description"=>$request->description,
    "id_application"=>$request->application,
    "alerter"=>$request->alerter,
    "admin"=>"1"
]);

//Supprimer le commentaire et teter l'envoie d'événement
/*if($request->alerter=="oui"){
    //foreach user send msg , quand vous achetez un compte d'un outil de transfert de messages
    //Créez un compte dans n'importe quel outil de transfert de messages


return response()->json(['message' => 'SMS envoyé avec succès']);}*/





}

public function afficher_événements(){
    $événements=événements::all();
                return response()->json([
                    "status"=>true,
                    "événements"=>$événements,
                ]);
}

public function update_événement(Request $request,$id){

        $événement=événements::where("id",$id)->update([
            "description"=>$request->description,
            "id_application"=>$request->application,
            "alerter"=>$request->alerter,
            "admin"=>"2"]);
        if($événement){
                return response()->json([
                    "status"=>true,
                    "message"=>"événement modifier avec succes",
                ]);}else{
                return response()->json([
                    "status"=>false,
                    "message"=>"événement ne pas modifier",
                ]);
                }
//Supprimer le commentaire et teter l'envoie d'événement
/*if($request->alerter=="oui"){
    //foreach user send msg , quand vous achetez un compte d'un outil de transfert de messages
    //Créez un compte dans n'importe quel outil de transfert de messages


return response()->json(['message' => 'SMS envoyé avec succès']);}*/
}

public function supprimer_événement($id){
            $événement=événements::find($id)->delete();
                if($événement){
                return response()->json([
                    "status"=>true,
                    "message"=>"événement supprimer avec succes",
                ]);}
}


public function ajouter_application(Request $request){
    $application=applications::create([
    "nom_application"=>$request->nom_application,
    "admin"=>1
]);
    if($application){
        return response()->json([
            "status"=>true,
            "message"=>"application ajouter avec succes",
        ]);
    }


}

public function modifier_application(Request $request,$id){
        $application=applications::where("id",$request->id)->update([
            "nom_application"=>$request->nom_application,
            "admin"=>"1"]);
            if($application){
                return response()->json([
                    "status"=>true,
                    "message"=>"application modifier avec succes",
                ]);
}
}


public function get_utilisateur_authentifier(){
    $user=auth()->user();
    if(isset($user)){
        return response()->json([
            "status"=>true,
            "user"=>$user
        ]);
    };
}
}

