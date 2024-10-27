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
    'cliente',
    ];
    protected $table = 'clientes';
    protected $primaryKey = 'codi';

    // Si la clave primaria no es autoincremental:
    public $incrementing = false;

    // Si la clave primaria no es de tipo integer:
    protected $keyType = 'string';
    use HasFactory;

}
