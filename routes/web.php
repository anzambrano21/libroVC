<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExelControler;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/export',[ExelControler::class,"Exel"]);
Route::get('/{any?}', function () {
    return view('welcome');
});
