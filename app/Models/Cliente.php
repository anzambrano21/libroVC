<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $fillable = ['codi','nombre','representante', 'rif', 'direccion','telefono',
    'numero',
    'sucursal',
    'seniatlogin',
    'seniatpassword',
    'status',
    'codcpc',
    'contribuyente',
    'patente',
    'patentenumero',
    'patenteclave',
    'cajaregistradora',
    'distribuidora',
    'dircompro',
    ];
    protected $table = 'clientes';
    use HasFactory;

}
