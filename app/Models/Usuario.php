<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $fillable = [
        'usuario',
        'CI',
        'telefono',
        'clave',
        'codUser',
        'ubicacion',
        'fecha',
        'nivel',
    ];
    protected $table = 'usuarios';
    use HasFactory;
}
