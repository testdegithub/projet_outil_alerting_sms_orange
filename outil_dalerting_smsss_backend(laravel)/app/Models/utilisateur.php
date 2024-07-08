<?php

namespace App\Models;

use LdapRecord\Models\Model;

class utilisateur extends Model
{
    public static array $objectClasses = ['inetOrgPerson','top'];
    protected $fillable = ['cn','sn','mail'];
}
