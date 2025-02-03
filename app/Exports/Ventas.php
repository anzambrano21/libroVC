<?php

namespace App\Exports;
use Maatwebsite\Excel\Concerns\FromCollection; 
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView; 
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Worksheet\PageSetup;
use App\Models\libVentas; 
use App\Models\Cliente;
class Ventas implements FromView,WithColumnWidths, WithStyles
{
    private $codigo,$fecha,$fecha2;
    public function __construct($dato1,$dato2,$dato3,$sucursal) {
        $this->codigo=$dato1;
        $this->fecha=$dato2;
        $this->fecha2=$dato3;
        $this->sucursal=$sucursal;
    }
    /**
    * @return \Illuminate\Support\Collection
    */

    public function View() :View
    {
        $report=Cliente::where('codi',$this->codigo)->get();
        if ($report[0]->contribuyente=="Especial"){
            if($this->sucursal=='null'){
                return view("ventasEsp",[
                    "datos" => libVentas::where('cliente', $this->codigo)->whereBetween('fechafactur', [$this->fecha, $this->fecha2])->get()
        
                ]);

            }else{
                return view("ventasEsp",[
                    "datos" => libVentas::where('cliente', $this->codigo)->where("sucursal",$this->sucursal)->whereBetween('fechafactur', [$this->fecha, $this->fecha2])->get()
        
                ]);

            }


        }else{
            if($this->sucursal=='null'){
                return view("Venta",[
                    "datos" => libVentas::where('cliente', $this->codigo)->whereBetween('fechafactur', [$this->fecha, $this->fecha2])->get()
        
                ]);

            }else{
                return view("Venta",[
                    "datos" => libVentas::where('cliente', $this->codigo)->where("sucursal",$this->sucursal)->whereBetween('fechafactur', [$this->fecha, $this->fecha2])->get()
        
                ]);

            }



        }
    }
public function styles(Worksheet $sheet) {
    $sheet->getStyle('A1:O100')->getFont()->setSize(8);
    $sheet->getStyle('A1:O100')->getAlignment()->setWrapText(true);
    $sheet->getDefaultRowDimension()->setRowHeight(-1); // -1 indica ajuste automático
    $sheet->getPageSetup() ->setOrientation(PageSetup::ORIENTATION_LANDSCAPE); 
    $sheet->getPageSetup() ->setFitToWidth(1) ->setFitToHeight(1); // Ajustar márgenes de la página 
    $sheet->getPageMargins()->setTop(0.5); $sheet->getPageMargins()->setRight(0.5);
    $sheet->getPageMargins()->setLeft(0.5); $sheet->getPageMargins()->setBottom(0.5);
    
}
    public function columnWidths(): array {
        $report=Cliente::where('codi',$this->codigo)->get();
        if ($report[0]->contribuyente=="Especial"){
            return [
                'A'=>5,
                'B'=>6,
                'C'=>9,

                'D'=>9,

                'E'=>20,
                'F'=>9,
                'G'=>9,

                'H'=>9,

                'I'=>20,
                'J'=>10,
                'K'=>10,
                'L'=>10,
                'N'=>10,
                'O'=>10,
                'P'=>10,
                'Q'=>10,
                'R'=>10,
                'S'=>10,
                'T'=>10,
                'U'=>10,
                'V'=>10,
                'W'=>9,
                
                
    
            ];
        }else{

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
                'N'=>8.57,
                'O'=>9,
                'P'=>9,
                'Q'=>9,
                'R'=>9,
                'S'=>9,
                'T'=>9,
                'U'=>9,
                'V'=>9,
                'W'=>9,
                
                
    
            ];
        }
       
        
    }
}
