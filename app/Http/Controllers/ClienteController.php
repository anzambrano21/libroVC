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
        return Cliente::where('status', "Activado")->get();
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

    public function buscar(Request $request) {
        $busqueda=null;
        if ($request->ban) {
            $busqueda= Cliente::where('codi', $request->codigo)
            ->whereNotNull('sucursal')
            ->orWhere('telefono', $request->numero)
            ->orWhere('rif', $request->rif)
            ->orWhere('cliente', $request->cliente)
            ->orWhere('contribuyente', $request->contri)
            ->get();
        }else{
            $busqueda= Cliente::where('codi', $request->codigo)
            ->whereNull('sucursal')
            ->orWhere('telefono', $request->numero)
            ->orWhere('rif', $request->rif)
            ->orWhere('cliente', $request->cliente)
            ->orWhere('contribuyente', $request->contri)
            ->get();
        }

        return $busqueda;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $id= Cliente::count();
        Cliente::create([
            'codi'=>$id ? $this->generar_id($id+1) : $this->generar_id(1),
            'nombre'=>$request['nom'],
            'representante'=>$request['rep'],
            'rif'=>$request['rif'],
            'direccion'=>$request['dire'],
            'telefono'=>$request['telef'],
            'numero'=>$request['num'],
            'status'=>"Activado",
            'contribuyente'=>$request['con'],
            'patente'=>$request['paten'],
            'cajaregistradora'=>$request['regis'],
            

        ]);
        return $id;
    }

    /**
     * Display the specified resource.
     */
    public function show( $cliente)
    {
        return $cliente;


    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $cl)
    {
       $cliente= Cliente::where("codi",$cl)->first();
       if ($cliente){
        $cliente->codi=$request["codi"];
        $cliente->nombre=$request["nom"];
        $cliente->representante=$request["rep"];
        $cliente->rif=$request["rif"];
        $cliente->direccion=$request["dire"];
        $cliente->telefono=$request["telef"];
        $cliente->numero=$request["num"];
        $cliente->contribuyente=$request["con"];
        $cliente->patente=$request["paten"];
        $cliente->cajaregistradora=$request["regis"];
        $cliente->save();

       }


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $cliente)
    {
        $cliente= Cliente::where("codi",$cliente)->first();
        if($cliente){
            $cliente->status='Desactivado';
            $cliente->save();
        }

    }
}
