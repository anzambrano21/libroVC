<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ventas</title>
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
                <th style="text-align: center;" colspan="11">Libros de Ventas SEPTIEMBRE 2023</th>
            </tr>
            <tr></tr>
            <tr>
                <th style="border:  solid ;" rowspan="2">Fecha</th>
                <th style="border:  solid ;" rowspan="2">N Factura</th>
                <th style="border:  solid ;" rowspan="2">Nº CONtrOL FACTURA</th>
                <th style="border:  solid ;" rowspan="2">N Reporte Z</th>
                <th style="border:  solid ;" rowspan="2">N Documento</th>
                <th style="border:  solid ;" rowspan="2">Codigo de Maquina Fiscal</th>
                <th style="border:  solid ;" rowspan="2">Nombre o Razon Social del Cliente </th>
                <th style="border:  solid ;" rowspan="2">RIF</th>
                <th style="border:  solid ;" rowspan="2">TOTAL Ventas Mas I.V.A.</th>
                <th style="border:  solid ;" rowspan="2">Ventas no Gravadas</th>
                <th style="border:  solid ;" colspan="3">Ventas Afectadas (Devito Fiscal)</th>
                <th style="border:  solid ;" rowspan="2">N Doc. Reten</th>
                <th style="border:  solid ;" rowspan="2">IVA Reten (Por el Comprador)</th>
            </tr>
            <tr>
                <th style="border:  solid ;">Base</th>
                <th style="border:  solid ;">%</th>
                <th style="border:  solid ;">Inpuesto</th>
            </tr>
        </thead>
        <tbody>
            @php
                $TvmIva = 0.0;
                $Tvng = 0.0;
                $Tbase = 0.0;
                $Timp = 0.0;
                $TIvaR = 0.0;
            @endphp
            @foreach ($Ventas as $registro)
                        <tr>
                            <td style="border:  solid ;">{{$registro->fecha}}</td>
                            <td style="border:  solid ;">{{$registro->N_Factu}}</td>
                            <td style="border:  solid ;">{{$registro->N_Control}}</td>
                            <td style="border:  solid ;">{{$registro->N_Rep_Z}}</td>
                            <td style="border:  solid ;">{{$registro->N_Doc}}</td>
                            <td style="border:  solid ;">{{$registro->Cod_Maq_Fis}}</td>
                            <td style="border:  solid ;">{{$registro->Nom_R_Soc}}</td>
                            <td style="border:  solid ;">{{$registro->RIF}}</td>
                            <td style="border:  solid ;">{{$registro->Base + ($registro->Base * $registro->Porcen / 100)}}</td>
                            <td style="border:  solid ;"></td>
                            <td style="border:  solid ;">{{$registro->Base}}</td>
                            <td style="border:  solid ;">{{$registro->Porcen}}</td>
                            <td style="border:  solid ;">{{$registro->Base * $registro->Porcen / 100}}</td>
                            <td style="border:  solid ;">{{$registro->N_Doc_Reten}}</td>
                            @if ($registro->N_Doc_Reten)
                                <td style="border:  solid ;">{{$registro->Base * $registro->Porcen / 100}}</td>
                                @php
                                $TIvaR += $registro->Base * $registro->Porcen / 100;
                                @endphp
                                
                            @else
                                <td style="border:  solid ;">{{0 * ($registro->Base * $registro->Porcen / 100)}}</td>
                            @endif
                            @php
                                $TvmIva += $registro->Base + ($registro->Base * $registro->Porcen / 100);
                                
                                $Tbase += $registro->Base;
                                $Timp += $registro->Base * $registro->Porcen / 100;
                                $TIvaR += 0.0;
                            @endphp

                        </tr>

            @endforeach
            <tr>
                <td style="text-align: right;" colspan="7">Sub Total Pag 1</td>
                <td></td>
                <td style="border:  solid ;">{{$TvmIva}}</td>
                <td style="border:  solid ;">{{$Tvng}}</td>
                <td style="border:  solid ;">{{$Tbase}}</td>
                <td style="border:  solid ;"></td>
                <td style="border:  solid ;">{{$Timp}}</td>
                <td style="border:  solid ;"></td>
                <td style="border:  solid ;">{{$TIvaR}}</td>

            </tr>
            <tr>
                <td style="text-align: right;" colspan="7">TOTAL COMPRAS BS.:</td>
                <td></td>
                <td style="border:  solid ;">{{$TvmIva}}</td>
                <td style="border:  solid ;">{{$Tvng}}</td>
                <td style="border:  solid ;">{{$Tbase}}</td>
                <td style="border:  solid ;"></td>
                <td style="border:  solid ;">{{$Timp}}</td>
                <td style="border:  solid ;"></td>
                <td style="border:  solid ;">{{$TIvaR}}</td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
        </tbody>
        <thead>
            <tr>
                <th style="text-align: center;" colspan="11">AUTO REPUESTOS FIMOTORS, C.A.</th>

            </tr>
            <tr>
                <th style="text-align: center;" colspan="11">RIF.: J-40899124-1.</th>

            </tr>
            <tr>
                <th style="text-align: center;" colspan="11">Retenciones Otros Periodos 2023</th>
            </tr>
            <tr></tr>
            <tr>
                <th style="border:  solid ;" rowspan="2">Fecha</th>
                <th style="border:  solid ;" rowspan="2">N Factura</th>
                <th style="border:  solid ;" rowspan="2">Nº CONtrOL FACTURA</th>
                <th style="border:  solid ;" rowspan="2">N Reporte Z</th>
                <th style="border:  solid ;" rowspan="2">N Documento</th>
                <th style="border:  solid ;" rowspan="2">Codigo de Maquina Fiscal</th>
                <th style="border:  solid ;" rowspan="2">Nombre o Razon Social del Cliente </th>
                <th style="border:  solid ;" rowspan="2">RIF</th>
                <th style="border:  solid ;" rowspan="2">TOTAL Ventas Mas I.V.A.</th>
                <th style="border:  solid ;" rowspan="2">Ventas Sin Derecho Credito o IVA</th>
                <th style="border:  solid ;" rowspan="2">Bse</th>
                <th style="border:  solid ;" rowspan="2">%</th>
                <th style="border:  solid ;" rowspan="2">Impesto</th>
                <th style="border:  solid ;" rowspan="2">N Comporvante Retencion</th>
                <th style="border:  solid ;" rowspan="2">IVA Tetenido (Comprador)</th>
            </tr>
            <tr></tr>


        </thead>
        <tbody>
            <tr>
                <th style="border:  solid ; text-align: right;" colspan="7">Total Bs</th>
                <th style="border:  solid ;"></th>
                <th style="border:  solid ;"></th>
                <th style="border:  solid ;"></th>
                <th style="border:  solid ;"></th>
                <th style="border:  solid ;"></th>
                <th style="border:  solid ;"></th>
                <th style="border:  solid ;"></th>
                <th style="border:  solid ;"></th>
            </tr>
        </tbody>
    </table>
</body>

</html>