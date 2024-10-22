<?php

namespace App\Http\Controllers;

use App\Models\libVentas;
use Illuminate\Http\Request;

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
        
        return libVentas::where("cliente",$libVentas)->get();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, libVentas $libVentas)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(libVentas $libVentas)
    {
        //
    }
}
