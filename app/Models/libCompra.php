<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class libCompra extends Model
{
    protected $fillable = ['cliente',
    'mes',
    'numfactur',
    'fechafactur',
    'rif',
    'provedor',
    'montoimputotal',
    'sincredito',
    'basegeneral',
    'MontoIva',
    'usuario',
    'pornacional',
    'porimportacion',
    'poreten',
    'retenmonto',
    'comproreten',
    'fecharetencion',
    'fecharegistro',
    'controlFac',
    'exentas',
    'facPolar',
    'documento',
    'ISVnacional',
    'docafectado',
    ];
    protected $table = 'lib_compras';
    use HasFactory;
}
