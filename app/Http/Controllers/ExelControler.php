<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\UseExport;
use Maatwebsite\Excel\Facades\Excel;
use Carbon\Carbon;

class ExelControler extends Controller
{
    public function Exel(Request $datos) {

        $cidi = request('cidi');
        $fecha1 = Carbon::createFromFormat('d/m/Y', request('fecha1'))->format('Y/m/d');
        $fecha2 = Carbon::createFromFormat('d/m/Y', request('fecha2'))->format('Y/m/d');
        $hoja=request('hoja');
        return Excel::download(new UseExport($cidi,$fecha1,$fecha2,$hoja),'prueva.xlsx' );
    }
}
