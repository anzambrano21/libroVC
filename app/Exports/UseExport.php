<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use App\Exports\Ventas;
use App\Exports\Compra;
use App\Exports\Resumen;
use App\Exports\FiltroC;
use App\Exports\Provedor;
class UseExport implements WithMultipleSheets
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function sheets(): array
    {
        return [
            'Hoja 1' => new Ventas(),
            'Hoja 2' => new Compra(),
            'Hoja 3'=> new Resumen(),
            'Hoja 4'=> new FiltroC(),
            'Hoja 5'=> new Provedor(),
            // Agrega más hojas según tus necesidades
        ];
    }
}
