<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compras</title>
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
                <th style="text-align: center;" colspan="11">Libro de Compra</th>
            </tr>
            <tr></tr>
            <tr>
                <th style="border:  solid ;" rowspan="2">Fecha</th>
                <th style="border:  solid ;" rowspan="2">N Factura</th>
                <th style="border:  solid ;" rowspan="2">Nº CONthOL FACTURA</th>
                <th style="border:  solid ;" rowspan="2">Nota Dédito y/o Crédito</th>
                <th style="border:  solid ;" rowspan="2">NOMBRE O RAZON SOCIAL DEL PROVEEDOR</th>
                <th style="border:  solid ;" rowspan="2">RIF</th>
                <th style="border:  solid ;" rowspan="2">TOTAL COMPRAS INCLUYENDO I.V.A.</th>
                <th style="border:  solid ;" colspan="3">COMPRAS INTERNAS O IMPORTACIONES</th>
            </tr>
            <tr>
                <th style="border:  solid ;">Base</th>
                <th style="border:  solid ;">%</th>
                <th style="border:  solid ;">Impuesto</th>
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
            <tr>
                <td style="text-align: right;" colspan="5">Sub Total Pag 1</td>
                <td></td>
                <td style="border:  solid ;">{{$TvmIva}}</td>
                <td style="border:  solid ;">{{$Tbase}}</td>
                <td style="border:  solid ;"></td>
                <td style="border:  solid ;">{{$Timp}}</td>
                

            </tr>
            <tr>
                <td style="text-align: right;" colspan="5">TOTAL COMPRAS BS.:</td>
                <td></td>
                <td style="border:  solid ;">{{$TvmIva}}</td>
                <td style="border:  solid ;">{{$Tbase}}</td>
                <td style="border:  solid ;"></td>
                <td style="border:  solid ;">{{$Timp}}</td>
                
            </tr>
        </tbody>

    </table>
</body>

</html>