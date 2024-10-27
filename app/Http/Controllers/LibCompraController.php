<?php

namespace App\Http\Controllers;

use App\Models\libCompra;
use Illuminate\Http\Request;
use Carbon\Carbon;

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
            'proveedor'=>$request['prov'],
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
            'montoimputotal'=>$request['monisv'],
        ]);
        return $request;
    }

    /**
     * Display the specified resource.
     */
    public function show( $libCompra)
    {
        return $libCompra;
        //return libCompra::where("provedor",$libCompra)->get();
    }
    public function buscar()  {
        $cidi = request('cidi');
        $fecha1 = Carbon::createFromFormat('d/m/Y', request('fecha1'))->format('Y/m/d');
        $fecha2 = Carbon::createFromFormat('d/m/Y', request('fecha2'))->format('Y/m/d');
        return libCompra::where('provedor', $cidi)
                            ->whereBetween('fecharegistro', [$fecha1, $fecha2])
                                ->get();
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $registro=libCompra::findOrFail($id);
        $registro->proveedor=$request['prov'];
        $registro->provedor=$request['cli'];
        $registro->numfactur=$request['Nf'];
        $registro->fechafactur=$request['Ff'];
        $registro->fecharegistro=$request['Fr'];
        $registro->rif=$request['rif'];
        $registro->controlFac=$request['codF'];
        $registro->docafectado=$request['docA'];
        $registro->exentas=$request['Ex'];
        $registro->basegeneral=$request['Bi'];
        $registro->MontoIva=$request['isvi'];
        $registro->facPolar=$request['Fp'];
        $registro->documento=$request['Doc'];
        $registro->pornacional=$request['ImN'];
        $registro->montoimputotal=$request['monisv'];
        $registro->save();
        return "listo";

    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $libCompra)
    {
        libCompra::findOrFail( $libCompra)->delete();
    }
}
