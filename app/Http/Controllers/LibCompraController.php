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
            'cliente'=>$request['cli'],
            'numfactur'=>$request['Nf'],
            'fechafactur'=>$request['Ff'],
            'rif'=>$request['rif'],
            'controlFac'=>$request['codF'],
            'docafectado'=>$request['docA'],
            'exentas'=>$request['Ex'],
            'baseimportacion'=>$request['Bi'],
            'impuimportacion'=>$request['isvi'],
            'basenacional'=>$request['Bn'],
            'ISVnacional'=>$request['isvN'],
        ]);
        return $request;
    }

    /**
     * Display the specified resource.
     */
    public function show(libCompra $libCompra)
    {
        //
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
    public function destroy(libCompra $libCompra)
    {
        //
    }
}
