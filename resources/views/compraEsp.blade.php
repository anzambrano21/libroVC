<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
        <th style="text-align: center;" colspan="11">Libro de Ventas</th>
    </tr>
    <tr></tr>
    <tr>
        <th style="border:  solid ;" rowspan="2">Oper. Nor</th>
        <th style="border:  solid ;" rowspan="2">Tipo de Transac</th>
        <th style="border:  solid ;" rowspan="2">Fecha de Documento</th>
        <th style="border:  solid ;" rowspan="2">Nº Documento</th>
        <th style="border:  solid ;" rowspan="2">Nº Control Documento</th>
        <th style="border:  solid ;" rowspan="2">Numero de Factura Afectada</th>
        <th style="border:  solid ;" rowspan="2">Rason Social</th>
        <th style="border:  solid ;" rowspan="2">Rif  Adquiriente</th>
        <th style="border:  solid ;" rowspan="2">Valor Total Compra Nacional</th>
        <th style="border:  solid ;" rowspan="2">Ventas Gravadas Alicuota 16% con rebaja 9% y 7% según decreto</th>
        <th style="border:  solid ;" rowspan="2">Ventas Gravadas Alicuota 8%</th>
        <th style="border:  solid ;" rowspan="2">Ventas Gravadas Alicuota 16%+15%</th>
        <th style="border:  solid ;" rowspan="2">Compras Exoneradas o No Sujetas o Credit Fiscal No Deducible</th>
        <th style="border:  solid ;" rowspan="2">Debito Fiscal 16% con rebaja 9% y 7% según decreto</th>
        <th style="border:  solid ;" rowspan="2">Debito Fiscal 8%</th>
        <th style="border:  solid ;" rowspan="2">Debito Fiscal 16%+15%</th>
        <th style="border:  solid ;" rowspan="2">Credito Fiscal No Deducible</th>
        <th style="border:  solid ;" rowspan="2">Nº Comprobante de Retencion</th>
        <th style="border:  solid ;" rowspan="2">Monto Iva Retenido</th>
        <th style="border:  solid ;" rowspan="2"></th>
    </tr>
    <tr></tr>

</thead>
<tbody>
    @php
        $TvmIva = 0.0;
        $len=1;
        $Tbase = 0.0;
        $Timp = 0.0;
        
    @endphp
    @foreach ($datos as $registro)
        <tr>
            <td style="border:  solid ;">{{$len}}</td>
            <td style="border:  solid ;">O1Reg</td>
            <td style="border:  solid ;">{{$registro->fechafactur}}</td>

            <td style="border:  solid ;"></td>
            <td style="border:  solid ;">{{$registro->numfactur}}</td>
            <td style="border:  solid ;">{{$registro->docafectado}}</td>

  
            <td style="border:  solid ;">Agregar registro de cliente </td>
            <td style="border:  solid ;">Agregar registro de cliente</td>
            

            <td style="border:  solid ;">{{$registro->montoimputotal}}</td>
            


            
            @if ($registro->pornacional==8)  
            <td style="border:  solid ;"></td>
            <td style="border:  solid ;">{{$registro->basenacional}}</td>
            <td style="border:  solid ;"></td>

            @elseif ($registro->pornacional==16)  
            <td style="border:  solid ;">{{$registro->basenacional}}</td>
            <td style="border:  solid ;"></td>
            <td style="border:  solid ;"></td>

            @elseif ($registro->pornacional==31)  

            <td style="border:  solid ;"></td>
            <td style="border:  solid ;"></td>
            <td style="border:  solid ;">{{$registro->basenacional}}</td>
            @endif

            <td style="border:  solid ;">{{$registro->exentas}}</td>
            @if ($registro->pornacional==8)  
            <td style="border:  solid ;"></td>
            <td style="border:  solid ;">{{$registro->MontoIva}}</td>
            <td style="border:  solid ;"></td>

            @elseif ($registro->pornacional==16)  
            <td style="border:  solid ;">{{$registro->MontoIva}}</td>
            <td style="border:  solid ;"></td>
            <td style="border:  solid ;"></td>

            @elseif ($registro->pornacional==31)  

            <td style="border:  solid ;"></td>
            <td style="border:  solid ;"></td>
            <td style="border:  solid ;">{{$registro->MontoIva}}</td>
            @endif
            <td style="border:  solid ;">   </td>
            <td style="border:  solid ;">{{$registro->numfactur}}</td>
            <td style="border:  solid ;"></td>
            <td style="border:  solid ;"></td>
            
        </tr>
        @php
         $len+=1;
         $TvmIva+=$registro->montoimputotal;
         $Tbase+=$registro->basegeneral;
         $Timp+=$registro->MontoIva
        @endphp
    @endforeach
    <tr>
        <td style="text-align: right; border:  solid ;" colspan="10">Sub Total Pag 1</td>
        <td  style="border:  solid ;"></td>
        <td style="border:  solid ;"></td>
        <td style="border:  solid ;"></td>
        <td style="border:  solid ;">{{$len}}</td>
        <td style="border:  solid ;"></td>
        <td  style="border:  solid ;"></td>
        <td style="border:  solid ;"></td>
        <td style="border:  solid ;"></td>
        <td style="border:  solid ;">{{$len}}</td>
        <td style="border:  solid ;"></td>

        

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
<tr></tr><tr></tr>
<thead>
    <tr>
        <th colspan="4"></th>
        <th style="border:  solid ;" rowspan="2">Base Imponible</th>
        <th style="border:  solid ;" rowspan="2">Debito Fiscal</th>
        <th style="border:  solid ;" rowspan="2">IVA de Ventas Percibidos</th>
    </tr>
  
</thead>
<tbody>
    <tr></tr>
    <tr style="border:  solid ;" rowspan="2" >
        <td  colspan="4" style="border:  solid ;">Total: Ventas Internas No Gravadas</td>
    </tr>
    <tr style="border:  solid ;" rowspan="2" >
        <td colspan="4" style="border:  solid ;">Sum: Ventas de Exportación</td>
    </tr>
    <tr style="border:  solid ;" rowspan="2" >
        <td colspan="4" style="border:  solid ;">Sum: Ventas Int. Afectadas solo Alic. General</td>
    </tr>
    <tr style="border:  solid ;" rowspan="2" >
        <td colspan="4" style="border:  solid ;">Sum: Ventas Int. Afectadas solo Alic. Gral. + Adic.</td>
    </tr>
    <tr style="border:  solid ;" rowspan="2" >
        <td colspan="4" style="border:  solid ;">Sum: Ventas Int. Afectadas solo Alic. Reducidas</td>
    </tr>
</tbody>
</table>
</body>
</html>