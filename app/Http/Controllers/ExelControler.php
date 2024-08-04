<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\UseExport;
use Maatwebsite\Excel\Facades\Excel;
class ExelControler extends Controller
{
    public function Exel() {
        return Excel::download(new UseExport,"prueva.xlsx" );
    }
}
