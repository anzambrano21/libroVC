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
    'proveedor',
    'montoimputotal',
    'sincredito',
    'baseimportacion',
    'impuimportacion',
    'basenacional',
    'impunacional',
    'usuario',
    'pornacional',
    'porimportacion',
    'poreten',
    'retenmonto',
    'comproreten',
    'fecharetencion',
    'fechafactura',
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
