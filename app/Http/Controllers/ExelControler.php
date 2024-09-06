<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\UseExport;
use Maatwebsite\Excel\Facades\Excel;
class ExelControler extends Controller
{
    public function Exel(Request $datos) {

        $cidi = request('cidi');
        $fecha1 = request('fecha1');
        $fecha2 = request('fecha2');
        return Excel::download(new UseExport($cidi,$fecha1,$fecha2),'prueva.xlsx' );
    }
}
