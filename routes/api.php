<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\LibVentasController;
use App\Http\Controllers\LibCompraController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\SucursalController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::apiResource("cliente",ClienteController::class);
Route::apiResource("LibVenta",LibVentasController::class);
Route::apiResource("LibCompra",LibCompraController::class);
Route::apiResource("usuario",UsuarioController::class);
Route::apiResource("sucursal",SucursalController::class);
Route::post("/login",[UsuarioController::class,'log']);
Route::match(['get', 'post'], '/busCom',[LibCompraController::class,'buscar']);
Route::match(['get', 'post'], '/buscar',[ClienteController::class,'buscar']);
Route::get('/libVR',[LibVentasController::class,'librV']);
Route::put('/Creten/{id}',[LibVentasController::class,'retencion']);