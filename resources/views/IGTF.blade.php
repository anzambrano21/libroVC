<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IGTF</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th,
        td {
            border: solid #000;
            padding: 8px;
            text-align: center;
        }
    </style>
</head>
<body>
    
<table>

<thead>
    <tr>
        <th style="text-align: center;" colspan="11">AUTO REPUESTOS FIMOTORS, C.A.</th>

    </tr>
    <tr>
        <th style="text-align: center;" colspan="11">RIF.: J-40899124-1.</th>

    </tr>
    <tr>
        <th style="text-align: center;" colspan="11">Direccion:</th>
    </tr>
    <tr></tr>
    <tr>Reporte de IGTF</tr>
    <tr>Fecha Inicial</tr>
    <tr>Fecha Final</tr>
    <tr>
        <th style="border:  solid ;" rowspan="2">Registro</th>
        <th style="border:  solid ;" rowspan="2">Documento</th>
        <th style="border:  solid ;" rowspan="2">Control</th>
        <th style="border:  solid ;" rowspan="2">Fecha</th>
        <th style="border:  solid ;" rowspan="2">Rif</th>
        <th style="border:  solid ;" rowspan="2">Cliente</th>
        <th style="border:  solid ;" rowspan="2">Monto Incluyendo Iva</th>
        <th style="border:  solid ;" colspan="3">Base Nacional</th>
        <th style="border:  solid ;" colspan="3">Iva Nacional</th>
        <th style="border:  solid ;" colspan="3">Tasa Dolar</th>
        <th style="border:  solid ;" colspan="3">Porc.Igtf</th>
        <th style="border:  solid ;" colspan="3">Dolares</th>
        <th style="border:  solid ;" colspan="3">Monto Sobre</th>
        <th style="border:  solid ;" colspan="3">Retencion</th>
    </tr>

</thead>
<tbody>
    @php
        $TvmIva = 0.0;
        
        $Tbase = 0.0;
        $Timp = 0.0;
        
    @endphp
    @foreach ($datos as $registro)
        <tr>
            <td style="border:  solid ;">{{$registro->fechafactur}}</td>
            <td style="border:  solid ;">{{$registro->numfactur}}</td>
            <td style="border:  solid ;">{{$registro->controlFac}}</td>
            <td style="border:  solid ;"></td>
            <td style="border:  solid ;">{{$registro->provedor}}</td>
            <td style="border:  solid ;">{{$registro->rif}}</td>
            <td style="border:  solid ;">{{$registro->montoimputotal}}</td>
            <td style="border:  solid ;">{{$registro->basegeneral}}</td>
            <td style="border:  solid ;">{{$registro->pornacional}}</td>
            <td style="border:  solid ;">{{$registro->MontoIva}}</td>
        </tr>
        @php
         $TvmIva+=$registro->montoimputotal;
         $Tbase+=$registro->basegeneral;
         $Timp+=$registro->MontoIva
        @endphp
    @endforeach

</tbody>
</table>
    
</body>
</html>