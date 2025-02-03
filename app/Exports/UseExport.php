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
    private $codigo,$fecha,$fecha2,$hoja;
    public function __construct($dato1,$dato2,$dato3,$hoja,$sucu) {
        $this->codigo=$dato1;
        $this->fecha=$dato2;
        $this->fecha2=$dato3;
        $this->hoja=$hoja;
        $this->sucursal=$sucu;
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function sheets(): array
    {
        if($this->hoja=="Compra") {
            return [
            
                'Libro Compra' => new Compra( $this->codigo,$this->fecha,$this->fecha2,$this->sucursal),
    
                // Agrega más hojas según tus necesidades
            ];

        }elseif ($this->hoja== 'Venta') {
            return [
            
                'Libro Compra2' => new Ventas( $this->codigo,$this->fecha,$this->fecha2,$this->sucursal),
    
                // Agrega más hojas según tus necesidades
            ];
        }

    }
}
