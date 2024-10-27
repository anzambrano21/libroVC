<?php

namespace App\Http\Controllers;

use App\Models\libVentas;
use Illuminate\Http\Request;
use Carbon\Carbon;
class LibVentasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return libVentas::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        libVentas::create([
            "numfactur"=>$request["Nf"],
            "hasta"=>$request["Hast"],
            "control"=>$request["Con"],
            "docafecta"=>$request["DocA"],
            "fechafactur"=>$request["Ff"],
            "fecharegistro"=>$request["Fr"],
            "rif"=>$request["rif"],
            "cliente"=>$request["cli"],
            "montoimputotal"=>$request["MonIsv"],
            "basee"=>$request["Ex"],
            "ivae"=>$request["ivaex"],
            "basenacional"=>$request["Bg"],
            "impunacional"=>$request["isvg"],
            "registradora"=>$request["CajaR"],
            "porcentaje"=>$request["por"],
            "docpolar1"=>$request["Facp"],
            "Impuesto"=>$request["Moncan"],
            "igtfdolares"=>$request["mondol"],
            "igtfmontosobre"=>$request["MonIGTF"],
            "documento"=>$request["Doc"]
            

        ]);
        return $request;
    }

    /**
     * Display the specified resource.
     */
    public function show( $libVentas)
    {
        $cidi = request('cidi');
        $fecha1 = Carbon::createFromFormat('d/m/Y', request('fecha1'))->format('Y/m/d');
        $fecha2 = Carbon::createFromFormat('d/m/Y', request('fecha2'))->format('Y/m/d');
        
        return libVentas::where("cliente",$cidi)->whereBetween("fecharegistro",[$fecha1,$fecha2])->get();
    }
    public function librV() {
        $cidi = request('cidi');
        $fecha1 = Carbon::createFromFormat('d/m/Y', request('fecha1'))->format('Y/m/d');
        $fecha2 = Carbon::createFromFormat('d/m/Y', request('fecha2'))->format('Y/m/d');
        
        return libVentas::where("cliente",$cidi)->whereBetween("fecharegistro",[$fecha1,$fecha2])->get();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $registro=libVentas::findOrFail($id);
        $registro->numfactur=$request["Nf"];
        $registro->hasta=$request["Hast"];
        $registro->control=$request["Con"];
        $registro->docafecta=$request["DocA"];
        $registro->fechafactur=$request["Ff"];
        $registro->fecharegistro=$request["Fr"];
        $registro->rif=$request["rif"];
        $registro->cliente=$request["cli"];
        $registro->montoimputotal=$request["MonIsv"];
        $registro->basee=$request["Ex"];
        $registro->ivae=$request["ivaex"];
        $registro->basenacional=$request["Bg"];
        $registro->impunacional=$request["isvg"];
        $registro->registradora=$request["CajaR"];
        $registro->porcentaje=$request["por"];
        $registro->docpolar1=$request["Facp"];
        $registro->Impuesto=$request["Moncan"];
        $registro->igtfdolares=$request["mondol"];
        $registro->igtfmontosobre=$request["MonIGTF"];
        $registro->documento=$request["Doc"];
        $registro->save();
        return "listo";
    }
    function retencion(Request $request, $id)  {
        $registro=libVentas::findOrFail($id);
        $registro->poreten=$request["porReten"];
        $registro->retenmonto=$request["reten"];
        $registro->comprofecha=$request["fechacom"];
        $registro->comprobante=$request["compro"];
        $registro->registrofecha=$request["FechaR"];
        $registro->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $libVentas)
    {
        libVentas::findOrFail( $libVentas)->delete();
    }
}
