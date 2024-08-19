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
        Schema::create('lib_ventas', function (Blueprint $table) {
            $table->id();
            $table->string('cliente', 50)->nullable();
            $table->string('mes', 50)->nullable();
            $table->string('numfactur', 50)->nullable();
            $table->dateTime('fechafactur')->nullable();
            $table->string('rif', 50)->nullable();
            $table->string('proveedor', 50)->nullable();
            $table->double('montoimputotal')->nullable();
            $table->double('sincredito')->nullable();
            $table->double('baseimportacion')->nullable();
            $table->double('impuimportacion')->nullable();
            $table->double('basenacional')->nullable();
            $table->double('impunacional')->nullable();
            $table->string('usuario', 50)->nullable();
            $table->double('pornacional')->nullable();
            $table->double('porimportacion')->nullable();
            $table->double('poreten')->nullable();
            $table->double('retenmonto')->nullable();
            $table->string('id2', 50)->nullable();
            $table->string('registradora', 50)->nullable();
            $table->string('historiauser', 50)->nullable();
            $table->double('porret')->nullable();
            $table->double('retencion')->nullable();
            $table->string('comprobante', 100)->nullable();
            $table->dateTime('comprofecha')->nullable();
            $table->dateTime('fecharegistro')->nullable();
            $table->string('hasta', 50)->nullable();
            $table->string('docafecta', 50)->nullable();
            $table->string('documento', 50)->nullable();
            $table->string('control', 50)->nullable();
            $table->double('ivae')->nullable();
            $table->double('basee')->nullable();
            $table->double('pore')->nullable();
            $table->string('usermodifica', 50)->nullable();
            $table->dateTime('userfecha')->nullable();
            $table->string('docpolar1', 50)->nullable();
            $table->string('docpolar2', 50)->nullable();
            $table->double('dolar')->nullable();
            $table->double('porigtf')->nullable();
            $table->double('igtfmontosobre')->nullable();
            $table->double('igtfdolares')->nullable();
            $table->double('iigtfmonto')->nullable();
            $table->string('igtfcomprobante', 50)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lib_ventas');
    }
};
