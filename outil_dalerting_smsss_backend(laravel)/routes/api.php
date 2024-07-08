<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Tests;
use App\Models\utilisateurs;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\AdminActionsController;
use App\Http\Controllers\AuthentificationController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/






Route::post('/data', function(Request $request){

    Tests::create([
        "nom"=>$request->nom,
        "email"=>$request->email,
        'password' => Hash::make($request->password)
    ]);
    return response()->json([
        "status"=>true,
        "nom"=>"ezzouine",
        "email"=>"test_api@gmail.com",
        'password' => "password"
    ]);

});

Route::get('/data2', function(Request $request){

    return response()->json([
        "nom"=>"ezzouine",
        "email"=>"test_api@gmail.com",
        'password' => "password"
    ]);

});


Route::post('/authentification/login', [AuthentificationController::class, "login"]);
Route::get('get_utilisateur_authentifier/{id}', [AuthentificationController::class, "get_utilisateur_authentifier"]);
Route::post('/authentification/inscription',[AuthentificationController::class,"inscription"]);

//middleware

/*
    Route::middleware([check_authentification::class])->group(function () {
    Route::get('/', function () {}});
*/

Route::post("/ajouter_admin",[AdminActionsController::class,"ajouter_admin"]);
Route::get("/get_all_applications",[AdminActionsController::class,"get_all_applications"]);
Route::get("/afficher_événements",[AdminActionsController::class,"afficher_événements"]);
Route::post("/ajouter_événement",[AdminActionsController::class,"ajouter_événement"]);
Route::post("/update_événement/{id}",[AdminActionsController::class,"update_événement"]);
Route::post("/supprimer_événement/{id}",[AdminActionsController::class,"supprimer_événement"]);
Route::get("/afficher_applications",[AdminActionsController::class,"afficher_application"]);
Route::post("/ajouter_application",[AdminActionsController::class,"ajouter_application"]);
Route::post("/modifier_application",[AdminActionsController::class,"modifier_application"]);
Route::post("/update_application",[AdminActionsController::class,"update_application"]);
Route::post("/modifier_application/{id}",[AdminActionsController::class,"modifier_application"]);


//profile
Route::get("/get_utilisateur_authentifier/{id}",[AuthentificationController::class,"get_utilisateur_authentifier"]);
Route::post("/authentification/modifier_profile/{id}",[AuthentificationController::class, "modifier_profile"]);