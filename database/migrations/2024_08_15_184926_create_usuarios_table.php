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
            $table->string('usuario', 255);
            $table->string('CI', 255)->nullable();
            $table->string('telefono', 255)->nullable();
            $table->string('clave', 255);
            $table->string('codUser', 50);
            $table->string('ubicacion', 50)->nullable();
            $table->date('fecha')->nullable();
            $table->integer('nivel')->nullable();
            
            
            
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
