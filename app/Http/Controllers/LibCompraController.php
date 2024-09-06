<?php

namespace App\Http\Controllers;

use App\Models\libCompra;
use Illuminate\Http\Request;

class LibCompraController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return libCompra::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        libCompra::create([
            'provedor'=>$request['cli'],
            'numfactur'=>$request['Nf'],
            'fechafactur'=>$request['Ff'],
            'fecharegistro'=>$request['Fr'],
            'rif'=>$request['rif'],
            'controlFac'=>$request['codF'],
            'docafectado'=>$request['docA'],
            'exentas'=>$request['Ex'],
            'basegeneral'=>$request['Bi'],
            'MontoIva'=>$request['isvi'],
            'facPolar'=>$request['Fp'],
            'documento'=>$request['Doc'],
            'pornacional'=>$request['ImN'],
        ]);
        return $request;
    }

    /**
     * Display the specified resource.
     */
    public function show( $libCompra)
    {
        return libCompra::where("provedor",$libCompra)->get();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, libCompra $libCompra)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $libCompra)
    {
        libCompra::findOrFail( $libCompra)->delete();
    }
}
