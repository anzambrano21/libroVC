<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use App\Exports\Ventas;
class UseExport implements WithMultipleSheets
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function sheets(): array
    {
        return [
            'Hoja 1' => new Ventas(),
            'Hoja 2' => new Ventas(),
            // Agrega más hojas según tus necesidades
        ];
    }
}
