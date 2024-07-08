<?php

use Illuminate\Support\Facades\Route;
use LdapRecord\Container;
use App\Models\utilisateur;
use LdapRecord\Models\ActiveDirectory\User;
use App\Models\Utilisateur_ldap;
use App\Models\applications;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get("/",function(){
  dd(auth()->user());
});
