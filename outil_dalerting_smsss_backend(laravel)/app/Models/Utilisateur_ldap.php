<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use LdapRecord\Models\Model;
class Utilisateur_ldap extends Model
{
    use HasFactory;
    protected $fillable = ['cn','sn','mail'];
}
