<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class sucursal extends Model
{
    protected $fillable = ['codigocliente',
    'codigosucursal','nombresucursal',"estado"];
    protected $table = 'sucursales';
    use HasFactory;
}
