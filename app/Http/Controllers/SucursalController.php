<?php

namespace App\Http\Controllers;

use App\Models\sucursal;
use Illuminate\Http\Request;

class SucursalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }
    private function generar_id($n) {
        $letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $resultado = "";
    
        while ($n > 0) {
            $n--;
            $resultado = $letras[$n % 26] . $resultado;
            $n = (int)($n / 26);
        }
    
        return $resultado;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $id= sucursal::count();
        sucursal::create([
            "codigocliente"=> $request["codi"],
            "codigosucursal"=>$id ? $this->generar_id($id) : $this->generar_id(1),
            "nombresucursal"=>$request["nomSucur"],
            "estado"=>"Activado"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show( $sucursal)
    {
        return sucursal::where("codigocliente",$sucursal)->get();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $sucursal)
    {
        $cliente= sucursal::where("codigosucursal",$sucursal)->first();
        if ($cliente){
         $cliente->estado="Desactivado";

 
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(sucursal $sucursal)
    {
        //
    }
}
