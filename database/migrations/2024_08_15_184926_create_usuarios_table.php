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
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('login', 50);
            $table->string('usuario', 255);
            $table->date('fecha')->nullable();
            $table->string('car', 50)->nullable();
            $table->integer('nivel')->nullable();
            $table->string('clave', 255);
            $table->string('icono', 255)->nullable();
            $table->string('departamento', 100)->nullable();
            $table->integer('CODEMPRESA')->nullable();
            $table->string('NOMEMPRESA', 255)->nullable();
            $table->string('TIPO_PERMISO', 50)->nullable();
            // Otros campos que puedas necesitar
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
