<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Usuario::all();
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
        $id= Usuario::latest()->first();// ($edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
        Usuario::create([
            "usuario"=>$request['use'],
            "CI"=>$request['CI'],
            "telefono"=>$request['tf'],
            "clave"=>bcrypt($request['pw']),
            "codUser"=>$id ? $this->generar_id($id->id+1) : $this->generar_id(1),
            "ubicacion"=>$request['ubi'],
            "fecha"=>$request['fC'],
            "nivel"=>$request['permiso'],
            

        ]);

        return 'listo' ;
    }
    public function log(Request $request)
    {
        $user = Usuario::where('usuario', $request['email'])->first();
        
        if ($user && Hash::check($request['password'], $user->clave)) {

            Session::put("user", $request["email"]);
            Session::put("home", "Login successful");
            Session::put("rol", $user["nivel"]);
            return Session::all();
        } else {
            return "No existe";
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Usuario $usuario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Usuario $usuario)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Usuario $usuario)
    {
        //
    }
}
