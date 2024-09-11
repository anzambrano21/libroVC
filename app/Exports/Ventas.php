<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\View\View;
use  Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithStyles;
use \PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use App\Models\libVentas;
class Ventas implements FromView,WithColumnWidths, WithStyles
{
    private $codigo,$fecha,$fecha2;
    public function __construct($dato1,$dato2,$dato3) {
        $this->codigo=$dato1;
        $this->fecha=$dato2;
        $this->fecha2=$dato3;
    }
    /**
    * @return \Illuminate\Support\Collection
    */

    public function View() :View
    {
        return view("Venta",[
            "datos" => libVentas::where('cliente', $this->codigo)->whereBetween('fechafactur', [$this->fecha, $this->fecha2])->get()
        ]);
    }
public function styles(Worksheet $sheet) {
    $sheet->getStyle('A1:O100')->getFont()->setSize(8);
    $sheet->getStyle('A1:O100')->getAlignment()->setWrapText(true);
    $sheet->getDefaultRowDimension()->setRowHeight(-1); // -1 indica ajuste automático

    
}
    public function columnWidths(): array {
        return [
            'A'=>9,
            'B'=>8.29,
            'C'=>10.29,
            'D'=>8.43,
            'E'=>9,
            'F'=>9,
            'G'=>9,
            'H'=>9,
            'I'=>9,
            'J'=>4,
            'K'=>9,
            'L'=>3,
            'N'=>8.57
            

        ];
        
    }
}
