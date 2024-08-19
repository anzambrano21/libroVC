<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;


class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Cliente::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        Cliente::create([
            'codi'=>$request['codi'],
            'nombre'=>$request['nom'],
            'representante'=>$request['rep'],
            'rif'=>$request['rif'],
            'direccion'=>$request['dire'],
            'telefono'=>$request['telef'],
            'numero'=>$request['num'],
            'sucursal'=>$request['subC'],
            'contribuyente'=>$request['con'],
            'patente'=>$request['paten'],
            'cajaregistradora'=>$request['regis'],

        ]);
        return $request;
    }

    /**
     * Display the specified resource.
     */
    public function show(Cliente $cliente)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cliente $cliente)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cliente $cliente)
    {
        //
    }
}
