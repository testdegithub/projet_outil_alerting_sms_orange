<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\utilisateurs;
use App\Models\utilisateur;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Session;
class AuthentificationController extends Controller
{

    public function get_utilisateur_authentifier($id){
        $utilisateur=Utilisateurs::find($id);
            return response()->json([
                "status"=>true ,
                "user"=>$utilisateur
            ]);
    }

    public function modifier_profile(Request $request,$id){
        $utilisateur=Utilisateurs::find($id);
        $événement=Utilisateurs::where("id",$id)->update([
            "nom"=>$request->nom,
            "numéro_téléphone"=>"212".$request->numéro_téléphone,
            'password' => Hash::make($request->password),
        ]);
    }

    public function login(Request $request){
        /* $utilisateur_authentifier=DB::select("select * from utilisateurs where email =:email and  password =:password",["email"=>$request->email,"password"=>$request->password]);
        if($utilisateur_authentifier){
        }else{
            return response()->json([
                "status"=>false,
            ]);
        } */
        $type_utilisateur=$email = DB::table('utilisateurs')->where('email', $request->email)->value('type_utilisateur');
        if($type_utilisateur=="admin"){
        if(Auth::attempt(["email"=>$request->email,"password"=>$request->password])){
            //$cookie = cookie('authentifier', auth()->user()->id, 60);
            //Session::put('authentifier', 'true');
            return response()->json([
                "status"=>true,
                "user"=>auth()->user()->id
            ]);
            //->cookie($cookie);
        }else{
            return response()->json([
                "status"=>false
            ]);
        }
        }else{
            return response()->json([
                "status"=>false
            ]);
        }
        }


    public function inscription(Request $request){
        Utilisateurs::create([
            "nom"=>$request->nom,
            "numéro_téléphone"=>"212".$request->numéro_téléphone,
            "email"=>$request->email,
            'password' => Hash::make($request->password),
            "type_utilisateur"=>"normal",
            "id_application"=>$request->application
        ]);

        /*$user = new utilisateur;
        $user->setdn("cn=John Doe,ou=utilisateur,dc=example,dc=com");
        $user->cn = 'John Doe2';
        $user->sn = 'Doe2';
        $user->mail = $request->email;
        $user->password = $request->password;
        $user->type='normale'
        $user->save();*/
        return response()->json([
            "status"=>true,
        ]);
    }
}
