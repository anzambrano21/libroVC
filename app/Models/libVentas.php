<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class libVentas extends Model
{    
    protected $fillable = ['cliente',
    'mes',
    'numfactur',
    'fechafactur',
    'rif',
    'proveedor',
    'montoimputotal',
    'sincredito',
    'usuario',
    'poreten',
    'retenmonto',
    'id2',
    'registradora',
    'historiauser',
    'porret',
    'retencion',
    'comprobante',
    'comprofecha',
    'fecharegistro',
    'hasta',
    'docafecta',
    'documento',
    'control',
    'ivae',
    'basee',
    'pore',
    'usermodifica',
    'userfecha',
    'docpolar1',
    'dolar',
    'porigtf',
    'igtfmontosobre',
    'igtfdolares',
    'iigtfmonto',
    'igtfcomprobante',
    'base',
    'impuesto',
    'porcentaje',
    'basenacional',
    'impunacional'
    ];
    protected $table = 'lib_ventas';
    use HasFactory;
}
