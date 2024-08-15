<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('clientes', function (Blueprint $table) {
            
            $table->string('codi', 10)->primary();
            $table->string('nombre', 200)->nullable();
            $table->string('representante', 50)->nullable();
            $table->string('rif', 50)->nullable();
            $table->string('direccion', 4000)->nullable();
            $table->string('telefono', 50)->nullable();
            $table->string('numero', 50)->nullable();
            $table->string('sucursal', 50)->nullable();
            $table->string('seniatlogin', 100)->nullable();
            $table->string('seniatpassword', 100)->nullable();
            
            $table->string('status', 50)->nullable();
            $table->string('codcpc', 50)->nullable();
            $table->string('contribuyente', 50)->nullable();
            $table->string('patente', 50)->nullable();
            $table->string('patentenumero', 500)->nullable();
            $table->string('patenteclave', 50)->nullable();
            $table->string('cajaregistradora', 50)->nullable();
            $table->string('distribuidora', 50)->nullable();
            $table->string('dircompro', 50)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clientes');
    }
};
