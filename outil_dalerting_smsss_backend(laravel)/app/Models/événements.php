<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class événements extends Model
{
    protected $fillable =["id","description","id_application","alerter","admin"];
    use HasFactory;
}
