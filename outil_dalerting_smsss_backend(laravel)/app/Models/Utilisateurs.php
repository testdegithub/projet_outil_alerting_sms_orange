<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Utilisateurs extends Authenticatable
{
    protected $fillable=["id", "nom", "numéro_téléphone", "email", "password","type_utilisateur" ,"id_application"];
    use HasFactory;
}
