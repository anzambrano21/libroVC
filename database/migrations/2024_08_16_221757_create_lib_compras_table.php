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
        Schema::create('lib_compras', function (Blueprint $table) {
            $table->id();

            $table->string('cliente')->nullable();
            $table->integer('mes')->nullable();
            $table->string('numfactur')->nullable();
            $table->date('fechafactur')->nullable();
            $table->string('rif')->nullable();
            $table->string('proveedor')->nullable();
            $table->decimal('montoimputotal', 10, 2)->nullable();
            $table->decimal('sincredito', 10, 2)->nullable();
            $table->decimal('baseimportacion', 10, 2)->nullable();
            $table->decimal('impuimportacion', 10, 2)->nullable();
            $table->decimal('basenacional', 10, 2)->nullable();
            $table->decimal('impunacional', 10, 2)->nullable();
            $table->string('usuario')->nullable();
            $table->decimal('pornacional', 5, 2)->nullable();
            $table->decimal('porimportacion', 5, 2)->nullable();
            $table->decimal('poreten', 5, 2)->nullable();
            $table->decimal('retenmonto', 10, 2)->nullable();
            $table->boolean('comproreten')->nullable();
            $table->date('fecharetencion')->nullable();
            $table->date('fechafactura')->nullable();
            $table->string('controlFac')->nullable();
            $table->decimal('exentas', 10, 2)->nullable();
            $table->boolean('facPolar')->nullable();
            $table->string('documento')->nullable();
            $table->decimal('ISVnacional', 10, 2)->nullable();
            $table->string('docafectado')->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lib_compras');
    }
};
